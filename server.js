import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

// ROTA POST

app.post('/users', async (req, res) => {  // função para criar os usuários com async (assincrona) que serve para avisar o sistema para esperar, que vai chegar uma resposta

    await prisma.user.create({
        data: {
            email: req.body.email, // função que vai pegar da requisição do body o email
            name: req.body.name,   // função que vai pegar da requisição do body o nome
            age: req.body.age      // função que vai pegar da requisição do body a idade
        }
    })
    res.status(201).json(req.body) // Mensagem avisando que deu tudo certo e fez o que você pediu (201)

})

app.get('/users', async (req, res) => { // função para listar os usuários, novamente com async

    let usuarios = []

    if (req.query){ // se o meu req.query existir, vamos fazer um filtro para o usuario. Se não, vamos apenas retornar o padrão (await prisma.user.findmany()) 
        usuarios = await prisma.user.findMany({ // filtro com algumas caracteristicas do que ele tem que retornar
            where: { 
                name: req.query.name, // me retorna um usuario que tenha um name que sejá igual a o meu req.query.name (nome da requisição da query)
                email: req.query.email, // retorna um email
                age: req.query.age // retorna uma idade
            }
        })

    }   else{
        usuarios  = await prisma.user.findMany() // vamos retornar todo mundo
    }


    // const usuarios = await prisma.user.findMany() // variavel usuarios que recebe um await (resposta) de prisma.user.findmany (findmany usado para achar tudo ou todos)

    res.status(200).json(usuarios) // resposta dizendo que deu certo
})

//ROTA PUT

app.put('/users/:id', async (req, res) => { // função para editar o usuário já criado, buscando o pela variavel :id criada apenas para isso (novamente com uma função async)

    await prisma.user.update({ // função update que vai atualizar o usuário
        where: {
            id: req.params.id     /// vai pegar da requisição o id
        },
        data: {                    /// vai trocar os dados pela nova requisição feita
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body) /// mensagem avisando que deu certo e fez tudo que você pediu!

})

// ROTA DELETE

app.delete('/users/:id', async (req, res) => { // função para deletar os usuários, novamente selecionando o usuario pela variavel :id
    await prisma.user.delete({ /// função delete que vai deletar o usuário
        where: {
            id: req.params.id   //// vai pegar da requisição o id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!" }) // mensagem avisando que o usuário foi deletado com sucesso!
})


app.listen(3000)



















/*
Usuário: matheushol28
Senha: lpkojihu
 */