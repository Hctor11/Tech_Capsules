const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000

// configurar handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars');

// agregar nuestros directirio public a express
app.use(express.static(__dirname + '/public'))

//getters
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

// custon 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, () => {
    console.log(`App en el puerto ${port}`);
})