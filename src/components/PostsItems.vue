<template>
    <div class="cursor-pointer" @click="favouritePost(content.id)">

        <div class="text-sm font-sans font-semibold p-2">
            @{{username}}
        </div>
        <div class="text-sm font-sans font-light px-2">
            {{content.content}} 
        </div>
        <div class="text-sm font-sans font-light px-2 py-2">
            {{now}}
        </div>
    </div>
</template>
<script>
import {computed} from 'vue';

export default {
    name:'PostItems',
    props:{
        username:{
            type: String,
            required: true
        },
        content:{
            type: Object,
            required: true
        }
    },
    setup(){
        const now =computed(()=>Date.now())
        const favouritePost=(id)=>{
            this.$emit('favourite',id);
        }
        return{
            now,
            favouritePost
        }
    }

}
</script>