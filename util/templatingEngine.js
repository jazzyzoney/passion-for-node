// import fs from "fs"

// const header = readPage("./public/components/header.html")
// const footer = readPage("./public/components/footer.html")

// export function constructPage(pageContent, options = {}) {
//     return header
//     .replace("$$TAB_TITLE$$", options.tabTitle || "NodeJS")
//     .replace("$$CSS_LINKS$$", options.cssLinks || "")
//     .replace("$$PAGE_CONTENT$$", pageContent)
//     + footer
// }

// export function readPage(path) {
//     return fs.readFileSync(path).toString()
// }