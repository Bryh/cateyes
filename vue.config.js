const path = require ("path")
function resolve (url) {
    return path.resolve(__dirname, url)
}


module.exports = { 
    
    chainWebpack (config)  {
        config
            .resolve
            .alias
            .set("@views", resolve("src/views"))
            .set("@com", resolve("src/components"))
            .set("@libs", resolve("src/libs"))
            .set("@css", resolve("src/css"))

    }
 }