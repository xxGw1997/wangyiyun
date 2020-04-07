<template>
    <div class="header">
        <div class="header-left">
            <slot name="left"/>
        </div>
        <div class="header-center">
            <slot name="center"/>
        </div>
        <div class="header-right">
            <slot name="right"/>
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {



   }
 }
</script>

<style scoped>
.header{
    width: 100%;
    height: 100%;
    display: flex;
}

.header-left{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-center{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-right{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
