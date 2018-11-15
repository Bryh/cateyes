<template>
    <div class="CitiesContent">
        
        <mt-index-list>
            <cities-item></cities-item>
            <mt-index-section 
                v-for = "(value, key) in citiesarr"
                :key = "key"
                :index="key">
                <div class ="city-item"
                v-for= "city in value"
                :key = "city.id"
                @click= "changeCity(city)"
                >
                {{city.nm}}
                </div>
            </mt-index-section>
        </mt-index-list>
         
    </div>
</template>

<script>
import { IndexList, IndexSection, Cell } from 'mint-ui';
import CitiesItem from "./CitiesItem.vue"
import { CHANGE_CITY } from "@store/chunks/mutation-types"
import { mapMutations } from 'vuex'

export default {

    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell,  
        CitiesItem,
    },
    computed: {
        citiesarr  () {
            //获取state上的数据
            let cities = this.$store.state.chunks.cities
            //处理cities数据 
            let title = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
            let titleobj = {}
            title.forEach(item => titleobj[item] = [])   
           
            cities.forEach(item => {
                let word =  item.py.substr(0,1).toUpperCase() 
                titleobj[word].push(item)
            });
            for (const key in titleobj) {
                if (!titleobj[key].length) {
                   delete titleobj[key]
                }
            }
            return titleobj
        },
    },
    methods: {
        changeCity (c) {
            let id = c.id
            let nm = c.nm
            this.$store.commit( {
                type: "chunks/" + CHANGE_CITY,
                city: {
                    cityId: id,
                    cityNm: nm
                }
            } )
            window.history.go(-1)
        }
    }
    
}
</script>
<style lang="scss">
    .city-item{
            height: 44px;
            line-height: 44px;
            margin-left: 15px;
            border-bottom: 1px solid #c8c7cc;
    }
</style>
