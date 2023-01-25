const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000

const images = [
    'https://images.unsplash.com/photo-1589958667822-af49cb5f1fb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1617465729916-47ea96ada368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    'https://images.unsplash.com/photo-1559762691-617a33825bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

// configurar handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars');

// agregar nuestros directirio public a express
app.use(express.static(__dirname + '/public'))

//getters
app.get('/', (req, res) => {
    res.render('home', {
        image: images[0]
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/entry1', (req, res) => {
    res.render('entry1', {
        layout: 'blog',
        image: images[0],
        name: 'entrada 1',
        title: 'hola testeo de titulo',
    })
})


// custon 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, () => {
    console.log(`App en el puerto ${port}`);
})