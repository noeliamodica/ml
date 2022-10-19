const express = require ('express');
const app = express();
const path = require ('path');
const publicFolderPath = path.resolve ('public');
app.use(express.static(publicFolderPath));
app.use (express.json());
app.use (express.urlencoded());
const port = process.env.PORT || 3001;
app.listen (port, () => {
    console.log('Servidor funcionando en puerto ${port}')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html'))
})

app.get('/searchbar', (req, res) => {
    res.sendFile(path.resolve('views/searchbar.html'))
})


app.post('/', (req, res) => {
  return res.send (req.body);
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'))
})
; 