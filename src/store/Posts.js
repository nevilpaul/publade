export const PostsModules ={
    namespaced:true,
    state:{
        posts:[]
    },
    mutations:{
        UPDATE_POSTS(state,posts){
            state.posts=posts;
        }
    },
    actions:{
        updatePosts({commit},posts){
            commit('UPDATE_POSTS',posts);
        }
    }

}