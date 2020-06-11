<template>
  <div>
    <div id="sideNavigationLeft">
      <div v-for="(i,index) in arr" :key="index">
        <span
          style="display: inline-block;width: 10px;height: 10px;background-color: rgb(62, 162, 131);border-radius: 50%;overflow: hidden;"
        ></span>
        <h5 style="display: inline-block;">{{i.class.name}}</h5>
        <hr />
        <div>
          <div class="img" v-for="(i,index) in i.sub_class" :key="index">
            <img :src=i.pic_url alt="">
            <span>{{i.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideNavigation",
  props: ["arr", "num"],
  data() {
    return {};
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style  >
/* 右侧 */
#sideNavigationLeft {
  width: 0;
  height: 500px;
  background-position: 100% auto;
  background-image: url(../img/1.jpg);
  overflow: hidden;
  transition: width 1s;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: width 1s;
  color: white;
}
#sideNavigationLeft > div > div {
  display: flex;
  width: 920px;
  flex-wrap: wrap;
}
img{
  width: 30px;
  height: 30px;
}
.img {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}

.fade-enter,
.fade-leave-to {
  width: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
</style>