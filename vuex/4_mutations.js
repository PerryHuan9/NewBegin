//测试mutations
//
// Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
//mutation必须是一个同步函数u，不能使用回调函数，质上任何在回调函数中进行的状态的改变都是不可追踪的。


import Vue from 'vue';
import Vuex from "vuex";
import { mapState, mapGetters, mapMutations } from "vuex";

Vue.use( Vuex );


const store = new Vuex.Store( {
    state: {
        count: 1,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        // 提交载荷,也就是通过commit传递参数
        decrement(state, n) {
            state.count -= n;
        },
        add(state, {amount}) {
            state.count += amount;
        }

    }
} );

new Vue( {
    el: "#app",
    store,
    template:
        `<div>
            <p>{{count}}</p>
            <button @click="increment">+</button>
            <button @click="decrement(5)">-n</button>
            <button @click="add({amount:5})">+n</button>
        </div>
        `,
    computed: {
        ...mapState( [
            "count"
        ] ),

    },
    methods: {
        // increment() {
        //     this.$store.commit( "increment" );
        // },
        // decrement() {
        //     //提交负荷
        //     this.$store.commit( "decrement", 5 );
        //     //    载荷应该是一个对象
        //     // this.$store.commit( "decrement", { amount: 5 } );
        //
        // },
        // add() {
        //     //使用对象风格的提交方式
        //     this.$store.commit( { type: 'add', amount: 5 } );
        // }

    //    使用mapMutations代替以上
        ...mapMutations([
            //将'this.increment()'映射为'this.$store.commit('increment')'
            'increment',
            //将this.decrement(n)映射为this.$store.commit('decrement',n)
            'decrement',
            'add',
        ]),
        ...mapMutations({
            //将this.add2()映射为this.$store.commit('increment')
            add2:'increment'

        })


    }

} );




































































