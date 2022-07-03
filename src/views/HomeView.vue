<template>
  <div class="home">
    <h1>
      Feature Flag Client App
      <br>
      Example
    </h1>

    <div class="features">
      <div class="feature" :class="{'yes': feature01, 'no': !feature01 }">Feature 01</div>
      <div class="feature" :class="{'yes': feature02, 'no': !feature02 }">Feature 02</div>
      <div class="feature" :class="{'yes': feature03, 'no': !feature03 }">Feature 03</div>
      <br>
      <div class="feature" :class="{'yes': feature04, 'no': !feature04 }">Feature 04</div>
      <div class="feature" :class="{'yes': feature05, 'no': !feature05 }">Feature 05</div>
      <div class="feature" :class="{'yes': feature06, 'no': !feature06 }">Feature 06</div>
      <br>
      <div class="feature" :class="{'yes': feature07, 'no': !feature07 }">Feature 07</div>
      <div class="feature" :class="{'yes': feature08, 'no': !feature08 }">Feature 08</div>
      <div class="feature" :class="{'yes': feature09, 'no': !feature09 }">Feature 09</div>
    </div>
  </div>
</template>

<script>
import featureFlag from '@/mixins/feature-flag.mixin'
export default {
  name: 'HomeView',
  mixins: [featureFlag],
  data: () => ({
    feature01: false,
    feature02: false,
    feature03: false,
    feature04: false,
    feature05: false,
    feature06: false,
    feature07: false,
    feature08: false,
    feature09: false,
  }),
  methods: {
    onFeaturesUpdate() {
      this.feature01 = this.$features.isEnabled('proxy.feature-01');
      this.feature02 = this.$features.isEnabled('proxy.feature-02');
      this.feature03 = this.$features.isEnabled('proxy.feature-03');

      this.feature04 = this.$features.isEnabled('proxy.feature-04');
      this.feature05 = this.$features.isEnabled('proxy.feature-05');
      this.feature06 = this.$features.isEnabled('proxy.feature-06');

      this.feature07 = this.$features.isEnabled('proxy.feature-07');
      this.feature08 = this.$features.isEnabled('proxy.feature-08');
      this.feature09 = this.$features.isEnabled('proxy.feature-09');
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

.feature {
  background-color: #000;
  box-shadow: 4px 4px 8px -2px rgb(0 0 0 / 76%);
  border-radius: 20cm;
  color: #eee;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: .85rem;
  height: 100px;
  margin: 10px;
  padding: 7px 10px;
  width: 100px;
}

.yes { background-color: #00cc2c; }
.no { background-color: #c00; }
</style>