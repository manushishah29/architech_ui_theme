<template>
    <div>
        <b-modal
            v-model="showModal"
            size="lg"
            title="Order History"
            hide-backdrop
            @hide="closeModal"
        >
            <b-form-group id="exampleInputGroup2"
                          label-for="exampleInput2">
                <label>Script :</label>
                <b-form-input id="exampleInput2"
                              type="text"
                              required
                              placeholder="Enter Script">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label-for="exampleInput2">
                <label>Expiry Date :</label>
                <VueDatePicker v-model="date" />
            </b-form-group>

            <template #modal-footer>
                <div>
                    <b-button
                        size="lg"
                        style="background: #4e77a8;border-color: #4e77a8; border-radius: 0.25rem;color: white"
                        @click="closeModal">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>
<script>

import {
    BModal,

} from 'bootstrap-vue'
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';

export default {
    name: 'edit-script-expiry-model',
    components: {
        BModal,
        VueDatePicker,
    },

    props: {
        editScriptExpiryModel: {
            type: Boolean,
            required: true,
        },


    },
    data() {

        return {
            showModal: false,
            date:new Date()

        }
    },

    beforeMount() {
        this.showModal = this.editScriptExpiryModel
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },


    },
}
</script>

