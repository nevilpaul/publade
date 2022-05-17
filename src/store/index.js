import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
  /**
   * 
   * a global varible that holds data for the entire application
   */
  state: {
    
  },

  getters: {
  },
  /**
   * 
   * this are functions that update/affects the global state
   * 
   */
  mutations: {
  },
  /**
   * 
   * this is a function that is called through out the application which calls mutations
   * 
   */
  actions: {
  },
  modules: {
    User:UserModule
  }
})
