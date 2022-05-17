export const UserModule ={
    namespaced:true,
    /**
   * 
   * a global varible that holds data for the entire application
   */
    state: {
        user:null,
    },
    /**
     * 
     * this are functions that update/affects the global state
     * 
     */
    mutations: {
        SET_USER(state,user){
            state.user=user;
        }
    },
    /**
     * 
     * this is a function that is called through out the application which calls mutations
     * 
     */
    actions: {
        setUser({commit},user){
            commit('SET_USER',user);
        }
    },
} 