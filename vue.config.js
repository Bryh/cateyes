const path = require ("path")
function resolve (url) {
    return path.resolve(__dirname, url)
}


module.exports = { 
    devServer:{
        proxy: {
            '/ce': {
              target: 'http://m.maoyan.com/',
              changeOrigin: true,
              pathRewrite: {
                '^/ce': ''
              }
            },
            '/bd': {
                target: 'http://api.map.baidu.com/',
                changeOrigin: true,
                pathRewrite: {
                  '^/bd': ''
                }
              }
          },
          
    },
    
    chainWebpack (config)  {
        config
            .resolve
            .alias
            .set("@views", resolve("src/views"))
            .set("@com", resolve("src/components"))
            .set("@libs", resolve("src/libs"))
            .set("@css", resolve("src/css"))
            .set("@utils", resolve("src/utils"))
            .set("@store", resolve("src/store"))

    }
 }