<template>
    <div>
      <div class="container">
        <div class="main-panel">
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
        </div>
        <div class="side-panel">
          <p class="name">{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
          <button type="button" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>

<script>
// import axios from 'axios'
import {fetchProductById} from '@/api/index';

export default{
   async asyncData({params}){
        // const id = console.log(params.$route)
        const response = await fetchProductById(params.id);
        const product = response.data
        return {product}
    }
  
    ,methods:{
      addToCart(){
        this.$store.commit('addCartItem', this.product);
        this.$router.push('/cart'); // pages 안에 페이지 이름을 동일하게 하여 연결만 해주면 nuxt 폴더 안에 router.json에서 라우터 자동 생성
       
      },
    },

//     created(){
//         const id = console.log(this.$route)
//     },
 }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>