import{a as n}from"./axios-L6U4YIEh.js";import{_ as d,c as _,a as c,b as t,w as a,d as e,F as l,r,o as p}from"./index-M66PMnIi.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ky-hexschool",BASE_URL:"/2023vue-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m}=h,f={data(){return{products:[],tempProduct:{}}},methods:{loginCheck(){const o=`${m}/v2/api/user/check`;n.post(o).then(u=>{}).catch(()=>{this.$router.push("/login")})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)adminAccount\s*=\s*([^;]*).*$)|^.*$/,"$1");n.defaults.headers.common.Authorization=o,this.loginCheck()}},k=c("h2",null,"這是後台",-1);function R(o,u,V,$,x,v){const s=r("RouterLink"),i=r("RouterView");return p(),_(l,null,[k,c("nav",null,[t(s,{to:"/admin/order"},{default:a(()=>[e("訂單列表")]),_:1}),e(" | "),t(s,{to:"/admin/products"},{default:a(()=>[e("產品列表")]),_:1}),e(" | "),t(s,{to:"/"},{default:a(()=>[e("登出回到前台")]),_:1})]),t(i)],64)}const B=d(f,[["render",R]]);export{B as default};