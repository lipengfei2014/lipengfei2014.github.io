<template>
  <div>
    <div class="mainButton" @mousedown="fun1" @mouseleave="fun2" @mouseup="fun2">
      <div class="bgdiv"></div>
      <div :style="{ background:color,width:a*2+'px' }"></div>
      <img src="../assets/logo.png" class="button" alt :style="{left:a*2+'px' }" />
    </div>
    <span>{{color|colorfun}}</span>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: ["color"],
  data() {
    return {
      a: 0,
      name: ""
    };
  },

  created() {
    Object.keys(this.$attrs).forEach(i => {
      this._props[i] = this.$attrs[i];
      this.name = i;
    });
    console.log(this._props[this.name]);

    this.a = this._props[this.name];
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},
  filters: {
    colorfun(value){
       return "♥"+value+"♥"
    }
  },
  methods: {
    fun1(e) {
      e.preventDefault();
      $(".mainButton").on(
        "mousemove",
        function(e) {
          console.log(e.clientX - $(".mainButton")[0].offsetLeft);
          if (
            (e.clientX - $(".mainButton")[0].offsetLeft) / 2 > 0 &&
            (e.clientX - $(".mainButton")[0].offsetLeft) / 2 < 255
          ) {
            this.a = Math.floor(
              (e.clientX - $(".mainButton")[0].offsetLeft) / 2
            );
            console.log(this.a);
            this.$emit("divEvent", this.a);
          } else if ((e.clientX - $(".mainButton")[0].offsetLeft) / 2 >= 255) {
            this.a = 255;
            this.$emit("divEvent", this.a);
          }
        }.bind(this)
      );
      console.log(e);
    },
    fun2(e) {
      $(".mainButton").unbind("mousemove");
      console.log(e);
    }
  },

  watch: {}
};
</script>
<style >
.mainButton {
  margin: 0 auto;
  margin-top: 20px;
  width: 510px;
  height: 10px;
  position: relative;
}

.mainButton > div:nth-child(1) {
  width: 510px;
  height: 10px;
  background-color: rgb(187, 187, 187);
  color: white;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
  margin: 0 auto;
  position: relative;
  top: 18px;
}

.mainButton > div:nth-child(2) {
  position: absolute;
  top: 18px;
  height: 10px;
  border-radius: 20px;
  margin: 0 auto;
}

.button {
  margin-top: 15px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
span {
  position: absolute;
  left: 1050px;
}
</style>