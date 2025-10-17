import express from 'express';

const app = express();

app.use(express.static("public", { index: false })); // important that express does not serve public before app.get("/") runs!

// landing page 
app.get("/", (req, res) => {
    res.send(frontpagePage)
});

// ========================= PAGES =====================================
// imports
import { frontpagePage, functionsPage, loopsPage, variablesPage, packagemanagementPage, modulesPage, devtoolsPage, envvariablesPage, apiPage, crudPage, urlPage, servingfilesPage, fetchingdataPage, htmlstructurePage, redirectionPage, renderingPage, codestructurePage, deploymentPage } from './util/pagesUtil.js'

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
app.get("/packagemanagement", (req, res) => {
    res.send(packagemanagementPage)
});

app.get("/modules", (req, res) => {
    res.send(modulesPage)
});

app.get("/devtools", (req, res) => {
    res.send(devtoolsPage)
});

app.get("/envvariables", (req, res) => {
    res.send(envvariablesPage)
});

// express and rest apis
app.get("/api", (req, res) => {
    res.send(apiPage)
});

app.get("/crud", (req, res) => {
    res.send(crudPage)
});

app.get("/url", (req, res) => {
    res.send(urlPage)
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

app.get("/redirection", (req, res) => {
    res.send(redirectionPage)
});

// web architecture and deployment 
app.get("/rendering", (req, res) => {
    res.send(renderingPage)
});

app.get("/codestructure", (req, res) => {
    res.send(codestructurePage)
});

app.get("/deployment", (req, res) => {
    res.send(deploymentPage)
});

// run the server on port 8080
const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});
