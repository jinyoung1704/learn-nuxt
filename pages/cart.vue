<template>
    <div class="container">
        <h1 class="list-title">카트 페이지</h1>
        <CartList></CartList>
        <div class="extra-panel">
            <button>구매하기</button>
        </div>
    </div>
</template>

<script>
// 페이지에 들어왔을 때 그리는 부분인데 nuxtServerInit 을 실행하면 여기가 필요없어짐
// import { FETCH_CART_TIEMS } from '@/store'
export default {
//    async asyncData({ store }){
//     await store.dispatch(FETCH_CART_TIEMS) // 페이지에 데이터가 다 담긴채로 라우터 이동
//    },
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