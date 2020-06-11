<template>
  <div id="app">
    <div
      id="showed"
      :style="{ background:'rgb('+red+','+green+', '+blue+'' }"
    >background-color:rgb({{red}}, {{green}}, {{blue}})</div>
    <slider :widthnumber1="red" :color="bgc1" @divEvent="fun3"></slider>
    <slider1 :widthnumber2="green" :color="bgc2" @divEvent="fun2"></slider1>
    <slider2 :widthnumber3="blue" :color="bgc3" @divEvent="fun1"></slider2>
  </div>
</template>

<script>
import slider from "./components/slider.vue";
import slider1 from "./components/slider.vue";
import slider2 from "./components/slider.vue";
export default {
  name: "App",
  data() {
    return {
      red: 14,
      green: 188,
      blue: 231,
      bgc1: "red",
      bgc2: "green",
      bgc3: "blue"
    };
  },
  components: {
    slider,
    slider1,
    slider2
  },
  methods: {
    fun1(e){
      this.blue = e;
    },
    fun2(e){
      this.green = e;
    },
    fun3(e) {
      this.red = e;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#showed {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>
