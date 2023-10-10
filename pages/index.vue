
<template>
  <div class="app">
      <!-- <NuxtLogo /> -->
      <main>
        <!-- <SearchInput :search-keyword="searchKeyword"
        @input="updateSerarchKeyword" -->
        <SearchInput 
        v-model="searchKeyword"
        @search="searchProducts">
       </SearchInput>
        <!-- <div>
          <input type="text" />
        </div> -->
        <div>
            <ul>
                <li
                v-for="product in products"
                :key="product.id"
                class="item flex"
                @click="moveToDetailPage(product.id)"
              >
                <img class="product-image" :src="product.imageUrl" alt="product.name" />
                <p> {{ product.name }}</p>
                  <span> {{ product.price }}</span>
              </li>
            </ul>
            <div class="cart-wrapper">
              <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
            </div>
        </div>
      </main>
  </div>
</template>

<script>
  import axios from 'axios'
  import SearchInput from '@/components/SearchInput.vue'
  import {fetchProductsByKeyword} from '@/api/index'


  export default {
    comments : {SearchInput}
    ,
      async asyncData(){
          const response = await axios.get('http://localhost:3000/products')
          // console.log(response)

          const products = response.data.map((item) =>{
             return {
              ...item,
              imageUrl:  `${item.imageUrl}?random=${Math.random()}`
             }
          })
          return {products}
      },

      data(){
        return{
          searchKeyword:'',
        }
      },

      methods:{
        moveToDetailPage(id){
          this.$router.push(`detail/${id}`);

        },
        // updateSerarchKeyword(keyword){
        //   this.searchKeyword = keyword
        // }
        async searchProducts(){
          const response = await fetchProductsByKeyword(this.searchKeyword)
          // console.log(response)
          
          this.products = response.data.map((item) => ({
              ...item,
              imageUrl:  `${item.imageUrl}?random=${Math.random()}`,
          }))
         
        },

        moveToCartPage(){
          this.$router.push('/cart')
        }
      },

      // data(){
      //     return {
      //         products: [],
      //     }
      // },

      // async created(){
         
      // }
  }
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}

.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>