<template>
    <div class="row justify-content-center">
        <h3 class="positionH w-100">Hobby：</h3>
        <table class="col-10 table table-sm">
            <tbody>
                <tr>
                    <!-- <th scope="row">Indoor hobby</th> -->
                    <SotahTableData v-for="item in HobbyDataArray1" 
                    :key="item" 
                    :dataName="item"
                    @mouseOveredItem='MouseOrveredItemNameForOperateAction' />
                </tr>
                 <tr>
                     <SotahTableData v-for="item in HobbyDataArray2" :key="item" 
                    :dataName="item"/>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue, /* Prop, Emit */ } from "vue-property-decorator";
import SotahTableData from "@/components/atoms/SotahTableData.vue";
import * as constants from '@/constants/TopPage';

@Component({
    components: {
        SotahTableData,
    },


    methods: {
        MouseOrveredItemNameForOperateAction(payload: string) {
           this.$store.dispatch(constants.COMMIT_MOUSE_ORVERED_ITEM_NAME, payload);
        },
    },
})

export default class SotahHobbyArea extends Vue{
    public  HobbyDataArray1: string[] = 
    [
        "Takoyaki",
        "Electric Work",
        "Arduino",
        "Programming",
    ]

     public  HobbyDataArray2: string[] = 
    [
        "Freestyle football",
        "Billiards",
        "Skateboard",
        "Bowling"
    ]

        hobbyClickedPass1(payload: string){
    //    console.log(payload);
        this.$emit('clickedItm2', payload);
    }

    mouseOverHobbyPass1(payload: string){
        this.$emit('mouseOverItem2', payload);
    }
}
</script>

<style lang="scss">
.positionH {
    text-align: left;
    display: block;
    padding-bottom: 2%;
    padding-left: 10%;
}

</style>