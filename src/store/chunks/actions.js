import { CHANGE_CITY } from "./mutation-types"

import http from "@utils/ajax"
 
export default {

    async getPosition ( { commit } ) {
        
        let cityId = null
        //定位城市信息
        let result = await http({
            url: "/bd/location/ip",
            params: {
                ak: "pdKH8RzeIIq927kBSZ2NUHcmxEbM3rIU"
            }
        },true)
        //获取城市列表
        let cities  = await http({
            url: "/ce/dianying/cities.json"
        })
      
       
        
        let citieslist = cities.data.cts
        let cityNm = result.data.content.address.replace("市","")
      
        for(let i=0; i<citieslist.length; i++){
            if(cityNm == citieslist[i].nm){
                 cityId = citieslist[i].id
                break
            }
        }
       commit({
            type: CHANGE_CITY,
            city: {
                cityId: cityId,
                cityNm: cityNm
            },
            cities: citieslist
        })

        
    }
    
}
