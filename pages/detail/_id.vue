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
          <button type="button" @click="addToCart">카트에 담기</button>
        </div>
      </div>
    </div>
  </template>

<script>
// import axios from 'axios'
import {createCartItem, fetchProductById} from '@/api/index';

export default{
   async asyncData({params}){ // asyncData : 페이지 컴포넌트 안에서만 사용 가능 
        // const id = console.log(params.$route)
        const response = await fetchProductById(params.id);
        const product = response.data
        return {product}
    }
  
    ,methods:{
      async addToCart(){
        await createCartItem(this.product);
       
        this.$store.commit('addCartItem', this.product); // this.store.$commit :addCartItem 을 this.product 로 변경하겠다
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