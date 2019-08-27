<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="test message" @hellowsubmit="onclick"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // props: {

  // },
  components: {
    HelloWorld
  },
  methods: {
    onclick (p) {
      console.log('from homw', p)
    }
  }

}
</script>
