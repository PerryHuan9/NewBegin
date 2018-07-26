<template>
    <table>
        <th style="text-align: center" colspan="3">个人信息输入模板</th>
        <tr>
            <td><label for="name">姓名：</label></td>
            <td colspan="2"><input id="name" type="text" v-model="model.name"></td>
        </tr>
        <tr>
            <td><label>性别：</label></td>
            <td>
                <label for="boy">男</label>
                <input id="boy" type="radio" v-model="model.sex" value="boy">
            </td>
            <td>
                <label for="girl">女</label>
                <input id="girl" type="radio" v-model="model.sex" value="girl">
            </td>
        </tr>
    </table>
</template>

<script>
    // model.exports = {}

    export default {
        name: "input-model",
        props: ['model'],
        data: function () {
            return {}
        }
    }


</script>

<style scoped>

</style>