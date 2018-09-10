//测完Vuex的getter，getter相当于store的计算属性
//即将一些公共用的计算属性放在了store中

import Vue from "vue";
import Vuex from "vuex";
import { mapGetters } from "vuex";

Vue.use( Vuex );


const store = new Vuex.Store( {
    state: {
        todos: [
            { id: 1, text: "先天下之忧而忧", done: true },
            { id: 2, text: "后天下之乐而乐", done: false },
        ]
    },
    mutations: {},
    getters: {
        doneTodos: state => {
            return state.todos.filter( todo => todo.done );
        },
        //getter也可以接受其他getter作为第二个参数
        doneTodosCount(state, getters) {
            return getters.doneTodos.length;
        },
        // 利用getter函数返回一个函数，以实现给getter函数传参
        getTodoById(state){
            return id=> state.todos.find(todo=>todo.id===id);
        }

    }
} );
//store.getters对象在外面可以访问，对Vue内可以用this.$store.getters访问

new Vue( {
    el: '#app',
    store,
    template:
        `<div>
        <p>Size:{{this.$store.getters.doneTodosCount}}</p>
        <p>getTodoById({{id.id}}):{{this.$store.getters.getTodoById(1)}}</p>
        <ul>
            <li v-for="todo in this.$store.getters.doneTodos">
                <p>ID:{{todo.id}}</p>                
                <p>Text:{{todo.text}}</p>                
                <p>Done:{{todo.done}}</p>                
            </li>
        </ul>
        <ul>
            <li v-for="todo in doneTodos">
                <p>ID:{{todo.id}}</p>                
                <p>Text:{{todo.text}}</p>                
                <p>Done:{{todo.done}}</p>                
            </li>
        </ul>
        <p>getTodoById({):{{getTodoById(1)}}</p>
        
        
        
    </div>
   `,
    computed: {
        id(){
            return this.$store.getters.getTodoById(1);
        }
    },
    data:{

    },

    //使用mapgetters函数混入computed对象
    computed:{
        ...mapGetters([
            "doneTodos",
            "doneTodosCount",
            "getTodoById"
        ]),

    },



} );


















































