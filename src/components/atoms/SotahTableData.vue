<template>
    <td>
        <a @mouseover="mouseOveredItemTransfer" @click="hobbyClicked" type="button" class="button" href="#">{{ dataName }}</a>
    </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SotahTableData extends Vue {
    @Prop()
    public dataName?: string;

    hobbyClicked() {
        this.$emit('clickedItm1', this.dataName);
    }

// マウスオーバーしたプロパティ名を親に伝達する
    mouseOveredItemTransfer (){
        this.$emit('mouseOveredItem', this.dataName);
    }
}
</script>

<style lang="scss">
.button {
  display: inline-block;
  width: 200px;
  height: 54px;
  text-align: center;
  text-decoration: none;
  line-height: 54px;
  outline: none;

  position: relative;
  z-index: 2;
  background-color: rgb(166, 226, 245);
  border: 2px solid red;
  color: Black;
  line-height: 50px;
  overflow: hidden;
}
.button::before,
.button::after {
  position: absolute;
  z-index: -1;
  display: block;
  content: '';
}
.button,
.button::before,
.button::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button:hover {
  color: #fff;
}
.button:hover::after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  background: #333;
}
</style>