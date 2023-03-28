<template>
    <div>
        <b-modal
            v-model="showModal"
            size="lg"
            title="Confirm?"
            hide-backdrop
            @hide="closeModal"
        >
            <h2>Ae you sure to on switch?</h2>
            <template #modal-footer>
                <div>
                    <b-button
                        size="lg"
                        style="background: #4e77a8;border-color: #4e77a8; border-radius: 0.25rem;color: white"
                        @click="closeModal">
                        No
                    </b-button>
                    <b-button
                        size="lg"
                        style="background: #4e77a8;border-color: #4e77a8; border-radius: 0.25rem;color: white">
                        Yes
                    </b-button>
                </div>
            </template>

        </b-modal>
    </div>
</template>

<script>
import {BModal} from "bootstrap-vue";

export default {
    name: "switch-model",
    components: {
        BModal,

    },

    props: {
        switchModel: {
            type: Boolean,
            required: true,
        },


    },
    data() {

        return {
            showModal: false,


        }
    },

    beforeMount() {
        this.showModal = this.switchModel
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },


    },
}
</script>

<style scoped>

</style>