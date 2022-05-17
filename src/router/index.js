import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../views/UserProfile.vue'
import AdminPanel from '../views/AdminPanel.vue'
import { users } from '@/assets/users'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel,
    meta:{
      isAdminRequired:true
    }
    
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach(async (to,from,next)=>{
  const user = store.state.User.user;
  if(user == null){
    await store.dispatch('User/setUser',users[0]);
  }
  const isAdmin = true;
  const isAdminRequired = to.matched.some(record=>record.meta.isAdminRequired);

  if(!isAdmin && isAdminRequired) next({name:'Home'})
  else next()

})
export default router
