<template>
    <b-card>
        <form-wizard @on-complete="onComplete"
                     ref="wizard"
                     shape="circle" color="#20a0ff">
            <tab-content title="Market Setting">
                <first-step ref="firstStep" ></first-step>
            </tab-content>
            <tab-content title="Target Stoploss Setting">
                <second-step></second-step>
            </tab-content>
            <tab-content title="Parabolic Sar">
                <third-step></third-step>
            </tab-content>
            <tab-content title="RSI">
                <fourth-step></fourth-step>
            </tab-content>
            <tab-content title="AlgofoxAuto">
                <fifth-step></fifth-step>
            </tab-content>


        </form-wizard>
    </b-card>

</template>


<script>
import FirstStep from "./FirstStep.vue";
import SecondStep from "./SecondStep.vue";
import ThirdStep from "./ThirdStep.vue";
import FourthStep from "./FourthStep.vue";
import FifthStep from "./FifthStep.vue";

export default {
    name: "AddScript",
    components:{
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep,
        FifthStep,

    },
    methods:{
        onComplete() {
            alert("Yay. Done!");
        },
    }
}
</script>

<style>

</style>