const express = require('express')
const app = express()
const navigation = require('./navigation.json')
// console.log(navigation)
const gallery = require('./gallery.json')
// console.log(gallery)


app.listen(3000, () => {
    console.log('Server started')
})
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Homepage', nav: navigation})
})
app.get('/about', (req, res) => {
    res.render('about', {title: 'About page', nav: navigation})
})
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact page', nav: navigation})
})
app.get('/gallery', (req, res) => {
    res.render('gallery', {title: 'Gallery page', nav: navigation, gallery: gallery})
})
app.get('/gallery/:item', (req, res) => {
    // console.log("param",req)
    // res.json(gallery.filter(elt => elt.id == req.params.item))
    res.render('galleryItem', {
        nav: navigation, 
        galleryItem: gallery.filter(elt => elt.id == req.params.item),
        title: req.params.item
    })

})
app.get('/team', (req, res) => {
    res.render('team', { title: 'team', nav: navigation })
})
app.use((req, res) => {
    res.render('404', { title: 'not_found' })
})
