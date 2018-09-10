const path = require( 'path' );
const VueLoaderPlugin = require( "vue-loader/lib/plugin" );


module.exports = {
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    mode: "none",
    entry: {
        main: "./route/main.js",
        transition: "./route/29_transition.js",
        state:"./vuex/2_state.js",
        getter:"./vuex/3_getter.js",
        mutations:"./vuex/4_mutations.js",
        action:"./vuex/5_action.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve( __dirname, "dist" ),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]


};

