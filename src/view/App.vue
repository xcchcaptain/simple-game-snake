<template>
  <div>
    <message :msg="msg"></message>
    <img :src="head" alt="沙雕" width="100" height="100" />
    <img src="../images/03.png" alt="沙雕2" width="100" height="100" />
    <div class="avatar"></div>
  </div>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import Message from "./Message.vue"
import head from '../images/01.png'

export default defineComponent({
  components:{
    message:Message
  },
  data(){
    return {
      msg:`落霞与孤鹜齐飞，秋水共长天一色`,
      head:head
    }
  }
})
</script>
