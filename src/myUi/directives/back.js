


const back = (Vue) => {
    Vue.directive( "back", {
        inserted: function ( el ) {
            el.style = "display: none"
            el.handler = caulScrollDistance.bind(el)
            window.addEventListener('scroll', el.handler)
            el.addEventListener("click", backToTop)
        }
    })
    function caulScrollDistance () {
        var scrollheight = document.body.scrollTop == 0 ? document.documentElement.scrollTop: document.body.scrollTop;
        if ( scrollheight > document.documentElement.clientHeight ){
            this.style = "display: block"
        }else{
            this.style = "display: none"
        }
    }
    function backToTop () {
        var distance = document.body.scrollTop == 0 ? document.documentElement.scrollTop: document.body.scrollTop;  
        var timer = setInterval (()=>{
            distance -= 300
           document.documentElement.scrollTop  = distance 
            if(document.documentElement.scrollTop <= 0 ){
                document.documentElement.scrollTop = 0 
                clearInterval(timer )
            }
            
        },20) 
        
    }

}


export default back