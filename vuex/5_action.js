//测试action
//mutation只允许包含同步操作
//而action则允许异步操作
import Vue from 'vue';
import Vuex from "vuex";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

Vue.use( Vuex );


const store = new Vuex.Store( {
    state: {
        count: 0
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {
        //context是一个与store对象具有相同方法和属性的context对象，但不是store对象
        increment(context) {
            context.commit( 'increment' );
        },
        //    使用参数解构
        decrement({ commit }) {
            commit( 'decrement' );
        },
        actionA({ commit }) {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    commit( 'increment' );
                    resolve();
                }, 1000 );
            } )
        }
    }

} );

new Vue( {
    el: '#app',
    store,
    template:
        `<div>
        <p>{{getCount}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div> 
         `,
    computed: {
        ...mapGetters( [ 'getCount' ] ),
    },
    methods: {
        increment() {
            this.$store.dispatch( 'increment' );
        },
        decrement() {
            this.$store.dispatch( 'decrement' );
        },
        actionA(){
            store.dispatch('actionA').then(()=>{

            });
        }

        // ...mapActions( [ 'increment', 'decrement' ] ),
    }

} );





































