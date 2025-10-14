import { readPage, constructPage } from "./templatingEngine.js"

const frontpage = readPage("./public/index.html")  // læser filen synkront, altså går ikke viedere til næste linjer før den er færdig her. placeres udenfor metoden hvor den skal bruges. 
//console.log(frontpage) // returns a buffer, therefore we add .toString above, to get something we can actually read instead 
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "NodeJS | Welcome"
})

// pages 
const functions = readPage("./public/pages/functions/functions.html")
export const functionsPage = constructPage(functions, {
    tabTitle: "NodeJS | Functions",
    //cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
})

const loops = readPage("./public/pages/loops/loops.html")
export const loopsPage = constructPage(loops, {
    tabTitle: "NodeJS | Loops",
    //cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
})
