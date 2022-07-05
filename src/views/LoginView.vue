<template>
  <div class="login">
      <h1>
        Feature Flag Client App
        <br>
        Login Example
      </h1>
      
      <br>

      <div>
        <input type="text" v-model="username">
        <br>
        <button @click="login">Login</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    username: ''
  }),
  methods: {
    login() {
      // NOTE!
      // It's necessary to do this every time the
      // client ($features) is recreated
      this.$features.updateContext({
        userId: this.username
      });

      this.$router.push({ path: 'home' });
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
}

input {
  background-color: #fff;
  outline: none;
  height: 24px;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
}

button {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  z-index: 9;
  border: 0;
}

button:hover {
  background: #00bd68;
}
</style>