import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage("./public/index.html")  // læser filen synkront, altså går ikke viedere til næste linjer før den er færdig her. placeres udenfor metoden hvor den skal bruges. 
//console.log(frontpage) // returns a buffer, therefore we add .toString above, to get something we can actually read instead 
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "NodeJS | Welcome"
})

// pages 

// fundamentals
const functions = readPage("./public/pages/fundamentals/functions.html")
export const functionsPage = constructPage(functions, {
    tabTitle: "NodeJS | Functions",
})

const loops = readPage("./public/pages/fundamentals/loops.html")
export const loopsPage = constructPage(loops, {
    tabTitle: "NodeJS | Loops",
})

const variables = readPage("./public/pages/fundamentals/loops.html")
export const variablesPage = constructPage(variables, {
    tabTitle: "NodeJS | Variables",
})

// the backend environment 
const packagemanagement = readPage("./public/pages/backendenvironment/packagemanagement.html")
export const packagemanagementPage = constructPage(packagemanagement, {
    tabTitle: "NodeJS | Packagemanagement",
})

const modules = readPage("./public/pages/backendenvironment/modules.html")
export const modulesPage = constructPage(modules, {
    tabTitle: "NodeJS | Modules",
})

const devtools = readPage("./public/pages/backendenvironment/devtools.html")
export const devtoolsPage = constructPage(devtools, {
    tabTitle: "NodeJS | Development Tools",
})

const envvariables = readPage("./public/pages/backendenvironment/envvariables.html")
export const envvariablesPage = constructPage(envvariables, {
    tabTitle: "NodeJS | Environment Variables",
})

// express and rest apis
const api = readPage("./public/pages/restapi/api.html")
export const apiPage = constructPage(api, {
    tabTitle: "NodeJS | REST API Design",
})

const crud = readPage("./public/pages/restapi/crud.html")
export const crudPage = constructPage(crud, {
    tabTitle: "NodeJS | CRUD Operations",
})

const url = readPage("./public/pages/restapi/url.html")
export const urlPage = constructPage(url, {
    tabTitle: "NodeJS | Handling Requests",
})

const servingfiles = readPage("./public/pages/restapi/servingfiles.html")
export const servingfilesPage = constructPage(servingfiles, {
    tabTitle: "NodeJS | Serving Files",
})

// frontend and client-server interaction
const fetchingdata = readPage("./public/pages/clientserver/fetchingdata.html")
export const fetchingdataPage = constructPage(fetchingdata, {
    tabTitle: "NodeJS | Fetching Data",
})

const htmlstructure = readPage("./public/pages/clientserver/htmlstructure.html")
export const htmlstructurePage = constructPage(htmlstructure, {
    tabTitle: "NodeJS | HTML Structure",
})

const redirection = readPage("./public/pages/clientserver/redirection.html")
export const redirectionPage = constructPage(redirection, {
    tabTitle: "NodeJS | Redirection",
})

// web architecture and deployment
const rendering = readPage("./public/pages/deployment/rendering.html")
export const renderingPage = constructPage(rendering, {
    tabTitle: "NodeJS | Rendering",
})

const codestructure = readPage("./public/pages/deployment/codestructure.html")
export const codestructurePage = constructPage(codestructure, {
    tabTitle: "NodeJS | Code Structure",
})

const deployment = readPage("./public/pages/deployment/deployment.html")
export const deploymentPage = constructPage(deployment, {
    tabTitle: "NodeJS | Deployment",
})