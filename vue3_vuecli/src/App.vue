<template>
  <!--  Vue3 组件中的模板结构，可以没有根标签-->
  <!--  ref-->
  <!--  <h1>姓名:{{ name }}</h1>-->
  <!--  <h1>年龄:{{ age }}</h1>-->
  <!--  <h1>工作类型:{{ job.type }}</h1>-->
  <!--  <h1>工作薪水:{{ job.salary }}</h1>-->
  <!-- reactive -->
  <h1>姓名:{{ person.name }}</h1>
  <h1>年龄:{{ person.age }}</h1>
  <h1>工作类型:{{ person.job.type }}</h1>
  <h1>工作薪水:{{ person.job.salary }}</h1>
  <button @click="changeInfo">点击</button>
</template>

<script>
import {
  // ref,
  reactive
} from "vue";

export default {
  name: 'App',
  components: {},
  setup() {
    //  数据
    // let name = ref('张三')
    // let age = ref(18)
    // let job = ref({
    //   type: '前端工程师',
    //   salary: '30K'
    // })

    //  函数
    // function changeInfo() {
    //   name.value = '李四'
    //   age.value = 68
    //   job.value.type = '全栈工程师'
    //   job.value.salary = '60K'
    // }

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K'
      }
    })

    function changeInfo() {
      person.name = '李四'
      person.age = 68
      person.job.type = '全栈工程师'
      person.job.salary = '60K'
    }

    return {
      person,
      changeInfo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
