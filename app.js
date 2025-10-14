import express from 'express';

const app = express();

app.use(express.static("public"));

import { frontpagePage } from './util/pagesUtil.js';

app.get("/", (req, res) => {
    //res.sendFile(path.resolve(''))
    res.send(frontpage)
});

// ========================= PAGES =====================================
// imports


// notes in categories 
app.get("/functions", (req, res) => {
    res.send()
});

app.get("/loopmethods", (req, res) => {
    res.send()
});

app.get("/variables", (req, res) => {
    res.send()
});

app.get("/anatomyofurl", (req, res) => {
    res.send()
});

app.get("/restapidesign", (req, res) => {
    res.send()
});

app.get("/useful", (req, res) => { //for the packages used in class
    res.send()
});

// run the server on port 8080
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});
