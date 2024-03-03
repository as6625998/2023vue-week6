<template>
  <h2>這是後台</h2>
  <nav>
    <RouterLink to="/admin/order">訂單列表</RouterLink> |
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/">登出回到前台</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    loginCheck () {
      const api = `${VITE_URL}/v2/api/user/check`
      axios.post(api)
        .then((res) => {
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    // 取得 Token（Token 僅需要設定一次）
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)adminAccount\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 夾帶token在header中，只要加入一次就可以重複使用
    axios.defaults.headers.common.Authorization = token
    // 觸發確認是否登入
    this.loginCheck()
  }
}
</script>
