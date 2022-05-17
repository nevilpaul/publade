<template>
    <div class="grid grid-cols-3 col-span-3">
        <div class="p-3 bg-slate-300" v-if="state.user">
            <div class="flex items-center" @click="userCheck(state.user.fullname)">
                <div class="h-14 w-14 rounded-full bg-slate-50 border-2 border-black"></div>
                <div class="text-black capitalize px-4">{{ state.user.username }}</div>
                <div v-if="state.user.is_admin" class="px-3 bg-green-300 mr-2">
                    Admin 
                </div>

                <div v-if="state.user.verified" class="px-3 bg-blue-400 mr-2 text-white"> verified</div>
            </div>
            <div>
                <SubmitPost @postBlog='postBlog' />
            </div>
        </div>
        <div class="posts p-6">
            <PostsItems class="bg-slate-100 text-black my-2 p-2 hover:translate-x-4 transition-all delay-100 duration-700" v-for="(post,index) in state.user.posts" :key='index' :username='state.user.username' :content='post' @favourite='fav'/>
        </div>
        <div></div>
    </div>
    
</template>
<script>
import PostsItems from '../components/PostsItems.vue';
import SubmitPost from '../components/SubmitPost.vue';
import {reactive,computed} from 'vue';
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
  name: 'UserProfile',
  components:{
      PostsItems,
      SubmitPost
  },  
  setup(props,ctx){
    const store = useStore();
    const route = useRoute();
    const user = computed(()=>store.state.User.user)
    const state = reactive({
      blogPostval:'',
      followers:0,
      following:2,
      user:user
    })
    const fullname = computed(()=>`${state.user.firstname} ${state.user.lastname}`)
    const userId = computed(()=>route.params.userId)
    
    const followNow = () => {
      state.followers++
    }
    const fav = (id) =>{
        console.log(`You added this post as favourite #${id}`);
    }
    const userCheck=(user)=>{
        ctx.emit('userChecker',user);
    }
    const postBlog=(blogPost,newPostType,emptyVal)=>{


        if(blogPost && newPostType=='publish'){
            state.user.posts.unshift({
                id:state.user.posts.length+1,
                content:blogPost
            })
            emptyVal;
        }else{
            console.log('post');
        }
        
        
    }
    
    return{
      state,
      fullname,
      userId,
      user,
      followNow,
      fav,
      userCheck,
      postBlog
    }
  },

}
</script>