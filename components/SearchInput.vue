<template>
   <div class="input-wrapper flex">
        <input type="text" class="search-input" :value="value" @input="$emit('input', $event.target.value)"/>
        <button class="btn" type="button" @click="$emit('search')">search</button>
    </div>
</template>

<script>
export default{
    props:{
        value:{
            type:String,
            default: () =>'',
        },
    },
}
</script>

<style lang="scss" scoped>

</style>