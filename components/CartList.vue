<template>
    <div class="list-wrapper">
        <ul>
            <!-- <li 
                v-for="cartItem in $store.state.cartItems" 
                :key:="cartItem.id">
                {{ cartItem }}
            </li> -->
            <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id"  class="list-item" >
                <!-- {{ cartItem }} -->
                <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
                <div class="description">
                    <p>{{ cartItem.name }}</p>
                    <span>{{ cartItem.price }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { FETCH_CART_TIEMS } from '~/store';

export default{
    // async asyncData({store}){  // 일반 components 안에 있는거기 때문에 asyncData 사용 못함, nuxtServerInit 사용 또는 fetch 속성을 사용해야 한다
    //     await store.dispatch(FETCH_CART_TIEMS)
    // },
    async fetch(){
        // console.log(this) // asyncData 안에는 this가 없어서 사용불가지만 fetch에선 사용 가능
        await this.$store.dispatch(FETCH_CART_TIEMS)
    }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>