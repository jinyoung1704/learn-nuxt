<template>
    <div>
        <h1>카트 페이지</h1>
        <div>
            <ul>
                <!-- <li 
                    v-for="cartItem in $store.state.cartItems" 
                    :key:="cartItem.id">
                    {{ cartItem }}
                </li> -->
                <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id" >
                    <!-- {{ cartItem }} -->
                    <img :src="cartItem.imageUrl" :alt="cartItem.name" />
                    <div class="description">
                        <p>{{ cartItem.name }}</p>
                        <span>{{ cartItem.price }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <button>구매하기</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>