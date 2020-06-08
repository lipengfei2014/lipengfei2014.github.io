<template>
  <div id="app">
    <div id="sideNavigation" @mouseleave="fun3">
      <div id="sideNavigationRight">
        <div
          v-for="(i,index) in list"
          class="title"
          :class="{titleclicked:index==num}"
          :key="index"
          @mouseenter="fun2(index,$event)"
        >
          <span v-for="(i,index) in i" :key="index">{{i.class.name}}  </span>
        </div>
      </div>
     <sideNavigation :arr="arr" :num="num" :boller="boller" ></sideNavigation>
    </div>
  </div>
</template>

<script>
import sideNavigation from "./components/sideNavigation";
import data from "../static/js/1.json";
export default {
  name: "App",
  components: {
    sideNavigation
  },
  data() {
    return {
      list: "",
      arr: [],
      num: null,
      num1: 0,
      boller: false
    };
  },
  created() {
    this.list = data.groups;
    console.log(this.list);
  },
  methods: {
    fun2(index, event) {
      this.num1++;
      this.num = index;
      document.getElementById("sideNavigationLeft").style.width = "100%";
      this.boller = true;
      this.arr = this.list[index];
      console.log(this.boller, this.num, this.arr);
    },
    fun3(e) {
      this.num = null;
      this.boller = false;
      document.getElementById("sideNavigationLeft").style.width = "0";
      console.log(this.boller);
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  margin-top: 100px;
}

#sideNavigation {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

#sideNavigationRight {
  width: 30%;
  height: auto;
  background-color: rgb(62, 162, 131);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#sideNavigation > div:nth-child(2) {
  width: 60%;
  height: 500px;
}

.title {
  box-sizing: border-box;
  margin: 0 auto;
  width: 80%;
  height: 49px;
  text-align: center;
  line-height: 49px;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(206, 199, 199);
  cursor: pointer;
}

.titleclicked {
  color: rgb(62, 162, 131);
  background-color: #fff;
}


</style>
