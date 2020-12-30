<template>
    <div>
        <div class="h-25">
            <SotahNameArea />
        </div>
        <div class="h-25">
            <SotahStatusArea />
        </div>
        <div class="h-50">
            <SotahHobbyArea @mouseOverItem2="mouseOverHobbyPass2" @clickedItm2="hobbyClickedPass2"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SotahNameArea from "@/components/molecules/SotahNameArea.vue";
import SotahStatusArea from "@/components/molecules/SotahStatusArea.vue";
import SotahHobbyArea from "@/components/molecules/SotahHobbyArea.vue";

@Component({
    components: {
        SotahNameArea,
        SotahStatusArea,
        SotahHobbyArea,
    },
})
export default class SotahExplainArea extends Vue{
    hobbyClickedPass2(payload: string){
        // console.log(payload);
        this.$emit('clickedItm3', payload);
    }

    mouseOverHobbyPass2(payload: string){
        this.$emit('mouseOverItem3', payload);
    }
}

</script>