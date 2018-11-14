<template>
    <div class="Cities">
        <cities-item></cities-item>
        <cities-content>
        </cities-content>
    </div>    
</template>

<script>
import CitiesItem from "@com/cities/CitiesItem.vue"
import CitiesContent from "@com/cities/CitiesContent.vue"
export default {
    components: {
        CitiesItem,
        CitiesContent
    }
}
</script>


<style lang="scss">

</style>
