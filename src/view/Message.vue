<template>
  <div>{{ msg }}</div>
</template>

<script type="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:"Message",
  props:{msg:{
    propType:"string",
  }}
})
</script>
