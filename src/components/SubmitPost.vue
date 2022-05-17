<template>
    <div>
        <form class="py-3" @submit.prevent='submitData()'>
            <div>
                <label for="post">Post New Blog</label>
                <textarea name="post" id="" cols="30" rows="3" v-model="state.blogPost"></textarea>
            </div>
            <div>
                <select name="" id="" v-model="state.newPostType">
                    <option :value="typePub.value" v-for="(typePub,index) in state.publishType" :key='index'>
                        {{typePub.name}}
                    </option>
                </select>
            </div>
            <button>post now</button>
        </form>
    </div>
</template>
<script>
import {ref,reactive,watch} from 'vue'
export default {
    name:'SubmitPost',
    setup(props,ctx){
        const invalidInput = ref(false)
        const state = reactive({
            blogPost:'',
            newPostType:'publish',
            publishType:[
                {value:'draft',name:'Draft'},
                {value:'publish',name:'Published'},
            ]
        });
        watch(invalidInput,(val)=>{
            if(val){
                console.log('invalid input')
            }
        })
        const emptyVal =()=>{
            state.blogPost='';
            console.log('here')
        }
        const submitData=()=>{

            invalidInput.value = false;
            if(state.blogPost === ""){
                invalidInput.value = true;
            }else{
                ctx.emit('postBlog',state.blogPost,state.newPostType,emptyVal())
            }
            
        }
        return{
            state,
            emptyVal,
            submitData
        }
    }
}
</script>