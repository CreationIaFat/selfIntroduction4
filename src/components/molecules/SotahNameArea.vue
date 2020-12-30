<template>
    <div>
        <h3 class="position">Author：</h3>
        <h1>Sota.H</h1>
    </div>
</template>

<script="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SotahNameArea extends Vue{

}
</script>

<style lang="scss">
h1 {
    font-style: italic;
    font-family: 'monospace, Courier New, Courier' ;
    color: rgb(102, 2, 2);
}

.position {
    text-align: left;
    display: block;
    padding-top: 5%;
    padding-bottom: 2%;
    padding-left: 10%;
}


@media screen and (max-width: 479px) { /*ウィンドウ幅が最大479pxまでの場合に適用*/
    h1 {
        color: darkmagenta;
    }
}

@media screen and (min-width: 767px) { /*ウィンドウ幅が767px以上の場合に適用*/

}
</style>