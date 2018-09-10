import Vue from "vue";
import Vuex from "vuex";
import { mapState } from 'vuex';

Vue.use( Vuex );

const store = new Vuex.Store( {
    state: {
        count: 0,
        circle: 0,
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
    }
} );

//当需要获取多个状态时，使用mapState辅助函数更好,该函数传入多个状态获取函数，它会为每个函数传入state参数
//该函数返回一个对象，当要求与computed混用时，可以使用对象展开运算符...  ,但它目前处于天阶段，无法使用
const Counter = {
    template:
        `<div>
            <p>{{count}}</p>
            <p>{{circle}}</p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>`,
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     },
    // },

    //使用mapState获取过个变量
    // computed: mapState( {
    //     count: state => state.count,
    //     //出入字符串'count表示state=>state.count
    //     countAlias: "count",
    //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    //     countPlusLocalState (state) {
    //         return state.count + this.localCount
    //     }
    //
    // } ),

    //当计算属性与state的子节点名称相同时，可以给mapState直接传一个数组
    // computed:mapState(['count','circle']),


    // 使用扩展运算符简化语法，目前处于提案阶段，无法使用
    computed: {
        //返回多个状态管理
        ...mapState( {
            count:state=>state.count,
            //出入字符串'count表示state=>state.count
            countAlias:"count",
            circle:'circle',
        } ),
        //本地的计算属性
        localComputed(){

        }


    },

    methods: {
        increment() {
            this.$store.commit( "increment" );
        },
        decrement() {
            this.$store.commit( "decrement" );
        },


    }
};


const app = new Vue( {
    el: "#app",
    store,
    components: { Counter },
    template:
        `<div>
        <counter></counter>
     </div>
    `,
} );



















