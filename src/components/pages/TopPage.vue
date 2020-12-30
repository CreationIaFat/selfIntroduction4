<template>
  <div class="row h-100">
    <div class="col-xs-12 col-md-5 topicarea">
      <SotahTopicArea />
    </div>
    <div class="col-xs-12 col-md-7 explainarea">
      <SotahExplainArea />
    </div>
    <!-- <div class="col-xs-12 col footerarea">
      footerArea
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SotahTopicArea from '@/components/organisms/SotahTopicArea.vue';
import SotahExplainArea from '@/components/organisms/SotahExplainArea.vue';

@Component({
  components: {
  SotahTopicArea,
  SotahExplainArea,
  }
})
export default class TopPage extends Vue {
}
</script>


<style lang="scss">

.topicarea {
  background-color: aquamarine;
}
.explainarea {
  background-color: bisque;
}
.footerarea {
  background-color: blue;
}

@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/

}

@media screen and (min-width: 767px) { /*ウィンドウ幅が767px以上の場合に適用*/

}

</style>
