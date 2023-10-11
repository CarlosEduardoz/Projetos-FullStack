const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//rotas
app.get('/post', (req, res) => {
    const post = {
        title:"Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.Js",
        comments : 13
    }

    res.render('post', {post})
})


app.get('/dashboard', (req, res) => {

     const items = ['Item a ', 'Item b', 'Item c']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const usuario = {
        nome : "Carlos",
        profissao : "Desempregado",
        idade : 20
    }

    const auth = true
    res.render('home', {usuario, auth})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})