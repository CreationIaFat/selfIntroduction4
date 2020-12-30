<template>
    <div class="row">
        <h3 class="positionS">Status：</h3>
        <h5 class="w-100">- Graduation department -</h5>
        <h4 class="positionS-under w-100">2019.3 :<br class="md-none"> Mechatronics engineering</h4>
        <h5 class="w-100">- Profession -</h5>
        <h4 class="positionS-under w-100">2019.4 〜 :<br class="md-none"> Application engineer</h4>
    </div>
</template>

<script="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SotahStatusArea extends Vue{

}
</script>

<style lang="scss">
h4 {
    font-style: italic;
    font-family: 'monospace, Courier New, Courier' ;
    color: rgb(102, 2, 2);
}

.positionS {
    text-align: left;
    display: block;
    padding-bottom: none;
    margin-bottom: auto;
    padding-left: 10%;
}

.positionS-under{
    padding-bottom: 2%;
}
</style>