export const users = [
    {
        id:1,
        username:'nevilpauls',
        firstname:'nevil',
        lastname:'paul',
        profile:'',
        email:'nevilpaul@netdevelops.com',
        verified:true,
        is_author:true,
        is_admin:true,
        posts:[
            {id:1,content:'Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use v-if on a <template> element, which serves as an invisible wrapper. The final rendered result will not include the <template> element.'},
            {id:2,content:'Another option for conditionally displaying an element is the v-show directive. The usage is largely the same:'},
            // {id:3,content:'v-if is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.'},

        ]
    },
    {
        id:2,
        username:'leonnelee',
        firstname:'Leonne',
        lastname:'paul',
        profile:'',
        email:'leonnelee@netdevelops.com',
        verified:true,
        is_author:true,
        is_admin:false,
        posts:[
            {id:1,content:'Open the terminal in your root directory(vuexy-laravel-full-version / vuexy-laravel-starter) & to install the composer packages, run the following command:'},
            {id:2,content:'In the root directory, you will find a file named .env.example rename the given file name to .env and run the following command to generate the key (and you can also edit your data base credentials here)'},

        ]
    },
    {
        id:3,
        username:'edger',
        firstname:'edger',
        lastname:'paul',
        profile:'',
        email:'edger@netdevelops.com',
        verified:true,
        is_author:false,
        is_admin:false,
        posts:[
            {id:1,content:'Open the terminal in your root directory(vuexy-laravel-full-version / vuexy-laravel-starter) & to install the composer packages, run the following command:'},
            {id:2,content:'In the root directory, you will find a file named .env.example rename the given file name to .env and run the following command to generate the key (and you can also edit your data base credentials here)'},

        ]
    },
]