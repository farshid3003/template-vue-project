<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ testVar }}</div>
    <div>{{ testVar2 }}</div>
    <div>{{ testVar3 }}</div>
    <!-- <div v-if="sampleData">{{ sampleData | json}}</div> -->
    <div><input type="text" v-model="testVar3" ></div>
    <div v-for="v in testVar" :key="v">{{ v }}</div>
    <div><input type="button" value="submit" :disabled="!valid"  @click="submit" ></div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      testVar: [ '1', '2', '3', '5wdfse', 45 ],
      testVar2: {},
      testVar3: null
    }
  },
  mounted() {
    this.$store.dispatch('sample/loadSample', {x: 'test'})
    this.testVar3 = 'start';
  },
  methods: {
    isValid(){
      return this.valid
    },
    submit () {
      console.log('cliced from hellow word');
      this.$emit('hellowsubmit', this.testVar);
    }
  },
  computed: {
    sampleData() {
      return this.$store.getters['sample/sampleObject']
    },
    valid() {
      if(this.testVar3 && this.testVar3 != '') {
        return true
      }
      else {
        return false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
