// vuex 연결
import { fetchCartItems } from '~/api'
export const FETCH_CART_TIEMS = 'FETCH_CART_TIEMS'

export const state = () => ({ // 데이터 상태 관리 , 컴포넌트간에 공유할 data를 의미
    cartItems:[],
})

export const mutations = { // state 값을 변경하는 로직
    addCartItem(state,cartItem){
        const newCartItem = {
          ...cartItem,  // 개수만큼 풀어서 집어넣음
          imageUrl:  `${cartItem.imageUrl}?random=${Math.random()}`,
      }
      state.cartItems.push(newCartItem)
    },
    setCartItems(state,cartItems){
      state.cartItems = cartItems
    }
}

// store 밑에 actions 속성에 action 함수 이름이 FETCH_CART_TIEMS
export const actions = {
  async [FETCH_CART_TIEMS]({commit}){ // 해당 이름으로 CartList.vue에서 호출
    const {data} = await fetchCartItems();
    commit('setCartItems', data.map(item=>({
      ...item,  // 개수만큼 풀어서 집어넣음
      imageUrl:  `${item.imageUrl}?random=${Math.random()}`,
    })))
    // console.log(response);
  },

  // 1) // store 밑에 actions 속성에 action 함수 이름이 nuxtServerInit
  // async nuxtServerInit(storeContext, nuxtContext){ // store 를 들고 오기 전에 미리 데이터 세팅
  //   await storeContext.dispatch(FETCH_CART_TIEMS)
  // }

  // 위에 줄과 아래 부분은 동일 기능 , 보통은 이렇게 열거하기 보다는 actions에 정의를 해놓고 이름으로 불러서 호출
  // nuxt 웹 서비스에 진입할 때 서버 사이드에서 바로 호출할 수 있는 nuxtServerInit
  // 2)
  //   const {data} = await fetchCartItems();
  //   storeContext.commit('setCartItems', data.map(item=>({
  //     ...item,  // 개수만큼 풀어서 집어넣음
  //     imageUrl:  `${item.imageUrl}?random=${Math.random()}`,
  //   })))
  // }
 
}
