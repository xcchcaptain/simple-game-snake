<template>
  <div><message :msg="msg"></message></div>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import Message from "./Message.vue"

export default defineComponent({
  components:{
    message:Message
  },
  data(){
    return {
      msg:`落霞与孤鹜齐飞，秋水共长天一色`
    }
  }
})
</script>
