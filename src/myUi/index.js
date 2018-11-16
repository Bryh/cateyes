import  directives from "./directives"


const install = ( Vue, options ) => {
    
    //注册指令
    for (const key in directives) {
        directives[key](Vue)
    }
}

export default {
    install
}