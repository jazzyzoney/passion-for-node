import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage("./public/index.html")  // læser filen synkront, altså går ikke viedere til næste linjer før den er færdig her. placeres udenfor metoden hvor den skal bruges. 
//console.log(frontpage) // returns a buffer, therefore we add .toString above, to get something we can actually read instead 
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "NodeJS | Welcome"
})

const game = readPage("./public/pages/game.html")
export const gamePage = constructPage(game, {
    tabTitle: "NodeJS | Game",
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

const variables = readPage("./public/pages/fundamentals/variables.html")
export const variablesPage = constructPage(variables, {
    tabTitle: "NodeJS | Variables",
})

// the backend environment 
const nodejsandnpm = readPage("./public/pages/backendenvironment/nodejs&npm.html")
export const nodejsandnpmPage = constructPage(nodejsandnpm, {
    tabTitle: "NodeJS | NodeJS & npm",
})

const modules = readPage("./public/pages/backendenvironment/modules.html")
export const modulesPage = constructPage(modules, {
    tabTitle: "NodeJS | Modules",
})

const tools = readPage("./public/pages/backendenvironment/tools.html")
export const toolsPage = constructPage(tools, {
    tabTitle: "NodeJS | Tools",
})

// express and rest apis
const api = readPage("./public/pages/restapi/api.html")
export const apiPage = constructPage(api, {
    tabTitle: "NodeJS | REST API design",
})

const crud = readPage("./public/pages/restapi/crud.html")
export const crudPage = constructPage(crud, {
    tabTitle: "NodeJS | CRUD operations",
})

const servingfiles = readPage("./public/pages/restapi/servingfiles.html")
export const servingfilesPage = constructPage(servingfiles, {
    tabTitle: "NodeJS | Serving files",
})

// frontend and client-server interaction
const fetchingdata = readPage("./public/pages/clientserver/fetchingdata.html")
export const fetchingdataPage = constructPage(fetchingdata, {
    tabTitle: "NodeJS | Fetching data",
})

const htmlstructure = readPage("./public/pages/clientserver/htmlstructure.html")
export const htmlstructurePage = constructPage(htmlstructure, {
    tabTitle: "NodeJS | HTML structure",
})

// web architecture and deployment
const rendering = readPage("./public/pages/deployment/rendering.html")
export const renderingPage = constructPage(rendering, {
    tabTitle: "NodeJS | Rendering",
})

const codestructure = readPage("./public/pages/deployment/codestructure.html")
export const codestructurePage = constructPage(codestructure, {
    tabTitle: "NodeJS | Code structure",
})