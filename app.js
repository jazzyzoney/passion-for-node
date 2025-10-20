import express from 'express';

const app = express();

app.use(express.static("public", { index: false })); // important that express does not serve public before app.get("/") runs!

// landing page 
app.get("/", (req, res) => {
    res.send(frontpagePage)
});

// ========================= PAGES =====================================
// imports
import { frontpagePage, gamePage, functionsPage, loopsPage, variablesPage, nodejsandnpmPage, modulesPage, toolsPage, apiPage, crudPage, servingfilesPage, fetchingdataPage, htmlstructurePage, renderingPage, codestructurePage } from './util/pagesUtil.js'

app.get("/game", (req, res) => {
    res.send(gamePage)
});

// notes in categories 
// fundamentals
app.get("/functions", (req, res) => {
    res.send(functionsPage)
});

app.get("/loops", (req, res) => {
    res.send(loopsPage)
});

app.get("/variables", (req, res) => {
    res.send(variablesPage)
});

// the backend environment 
app.get("/nodejs&npm", (req, res) => {
    res.send(nodejsandnpmPage)
});

app.get("/modules", (req, res) => {
    res.send(modulesPage)
});

app.get("/tools", (req, res) => {
    res.send(toolsPage)
});

// express and rest apis
app.get("/api", (req, res) => {
    res.send(apiPage)
});

app.get("/crud", (req, res) => {
    res.send(crudPage)
});

app.get("/servingfiles", (req, res) => {
    res.send(servingfilesPage)
});

// frontend and client-server interaction
app.get("/fetchingdata", (req, res) => {
    res.send(fetchingdataPage)
});

app.get("/htmlstructure", (req, res) => {
    res.send(htmlstructurePage)
});

// web architecture and deployment 
app.get("/rendering", (req, res) => {
    res.send(renderingPage)
});

app.get("/codestructure", (req, res) => {
    res.send(codestructurePage)
});

// run the server on port 8080
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});
