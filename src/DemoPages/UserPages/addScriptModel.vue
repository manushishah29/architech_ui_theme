<template>
    <div>
        <b-modal
            v-model="showModal"
            size="xl"
            title="Add Script"
            hide-backdrop
            @hide="closeModal"
        >
            <b-card>
                <VuePerfectScrollbar class="scrollbar-container" v-once>
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
                </VuePerfectScrollbar>
            </b-card>

            <template #modal-footer>
                <div>
                    <b-button
                        size="sm"
                        @click="closeModal">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
import {BModal} from "bootstrap-vue";
import FirstStep from "./FirstStep.vue";
import SecondStep from "./SecondStep.vue";
import ThirdStep from "./ThirdStep.vue";
import FourthStep from "./FourthStep.vue";
import FifthStep from "./FifthStep.vue";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
    name: "add-script-model",
    components: {
        BModal,
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep,
        FifthStep,
        VuePerfectScrollbar,
    },

    props: {
        addScriptModel: {
            type: Boolean,
            required: true,
        },


    },
    data() {
        return {
            showModal: false,
            // addScriptModel:false,


        }
    },

    beforeMount() {
        this.showModal = this.addScriptModel
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },

        toggleShowHistoryModel() {
            this.addScriptModel = !this.addScriptModel
        },
    },
}
</script>

<style scoped>

</style>