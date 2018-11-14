import { CHANGE_CITY } from "../chunks/mutation-types"


const saveCities = ( store ) => {
    store.subscribe ( ( mutation, state ) => {
       
        
        if ( mutation.type === "chunks/" + CHANGE_CITY ) {
           
            
            if ( mutation.payload.cities ){
               
                
                localStorage.cities = JSON.stringify( mutation.payload.cities ) 
                localStorage.city = JSON.stringify( mutation.payload.city )
             }
        }
    } )
}


export  {
    saveCities
}