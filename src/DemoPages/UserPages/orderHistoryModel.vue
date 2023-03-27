<template>
    <div>
    <b-modal
        v-model="showModal"
        size="lg"
        title="Order History"
        hide-backdrop
        @hide="closeModal"
    >
        <div>
            <b-card>
            <div class="m-2">

                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->
                    <b-col
                        cols="12"
                        md="6"
                        class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                    >
                        <label class="mx-1 mt-2">Show : </label>
                        <select v-model="pageSize" class="dropdown-style">
                            <option v-for="(item,index) in perPageOptions" :key="index" :value="item" >{{item}}</option>
                        </select>
                    </b-col>
                    <!-- Search -->
                    <b-col
                        cols="12"
                        md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-form-input
                                v-model="searchValue"
                                class="d-inline-block mr-1"
                                placeholder="Search by"
                            />

                        </div>

                    </b-col>
                </b-row>
            </div>
            <b-table
                id="my-table"
                :items="tableData"
                :fields="tableColumns"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :per-page="pageSize"
                :current-page="currentPage"
                class="mt-3"
                responsive="sm"
            >
                <template #cell(order_history)="data">
                    <b-link @click="toggleShowHistoryModel">{{data.value}}</b-link>
                </template>
                <template #cell(automation_switch)><b-form-checkbox switch size="lg" style="cursor: pointer"></b-form-checkbox></template>
                <template #cell(action)>
                    <b-dropdown class="p-0 mr-2" variant="link" right>
                            <span slot="button-content">
                                  <font-awesome-icon icon="ellipsis-v" />
                            </span>
                        <b-dropdown-item>Sell</b-dropdown-item>
                        <b-dropdown-item>Buy</b-dropdown-item>
                        <b-dropdown-item>Square Off</b-dropdown-item>
                        <b-dropdown-item>Edit</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                    </b-dropdown>
                </template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                aria-controls="my-table"
                align="right"
            ></b-pagination>
        </b-card></div>
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
// import vSelect from 'vue-select'
import {
    BModal,
    // BButton, // BFormInput
} from 'bootstrap-vue'


export default {
    name: 'order-history-modal',
    components: {
        // BFormInput,
        BModal,
        // BButton,
        // vSelect,
    },

    props: {
        orderHistoryModal: {
            type: Boolean,
            required: true,
        },


    },
    data() {
        return {
         showModal: false,

            // orderHistoryModel:false,
            perPageOptions: [3, 5, 10],
            pageSize: 3,
            pageNo: 1,
            sortBy: 'sr',
            sortDesc: false,
            currentPage: 1,
            searchValue: '',
            tableColumns: [
                {
                    key: 'no',
                    label: 'No',
                    sortable: true
                },
                {
                    key: 'type',
                    label: 'Type',
                    sortable: true
                },
                {
                    key: 'order_date',
                    label: 'Order Date',
                    sortable: true
                },
                {
                    key: 'ltp',
                    label: 'LTP',
                    sortable: true
                },


            ],
            items: [
                {
                    no: 1,
                    type: 'Script1',
                    order_date: '20-03-2023',
                    ltp: '2000',
                },
                {
                    no: 2,
                    type: 'Script2',
                    order_date: '21-03-2023',
                    ltp: '4000',
                },
                {
                    no: 3,
                    type: 'Script3',
                    order_date: '15-03-2023',
                    ltp: '5000',
                },
                {
                    no: 4,
                    type: 'Script4',
                    order_date: '22-03-2023',
                    ltp: '7000',
                },
            ]
        }
    },
    computed: {
        rows() {
            return this.items.length
        },
        tableData() {
            if (this.searchValue) {
                return this.items.filter(item => {
                    return item.no.toLocaleString().includes(this.searchValue) || item.type.includes(this.searchValue)
                        || item.order_date.includes(this.searchValue) || item.ltp.includes(this.searchValue)

                })
            }
            return this.items
        },
        totalPages() {
            return this.items > (this.pageSize * this.pageNo)
                ? this.pageSize * this.pageNo
                : this.items;
            //this.items && this.items.length > 0 ? this.items.length / this.pageSize : 0
        }
    },

    beforeMount() {
        this.showModal = this.orderHistoryModal
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        },
        changePerPage(val) {
            this.pageSize = val;
            this.pageNo = 1;
            return this.items;
        },

    },
}
</script>
<style scoped lang="scss">
.dropdown-style {
    color: #6c758e;
    background-color: white;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    display: block;
    height: 35px;
    width: 90px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

</style>
