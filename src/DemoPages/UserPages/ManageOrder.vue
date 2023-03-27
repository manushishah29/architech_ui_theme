<template>

    <div class="overflow-auto">
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
                        <label class="mt-2 mx-2">Show : </label>
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
                                class="d-inline-block mr-2"
                                placeholder="Search by"
                            />
                            <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success w-25" @click="toggleShowAddScriptModel">
                                <font-awesome-icon class="mr-2" icon="plus"/>
                                Add Script
                            </button>
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
                <template #cell(automation_switch)><b-form-checkbox switch size="lg" ></b-form-checkbox></template>
            <template #cell(action)>
                <b-dropdown no-caret class="p-0 mr-2" variant="link" right>
                            <span slot="button-content">
                                  <font-awesome-icon icon="ellipsis-v" />
                            </span>
                    <b-dropdown-item style="background: #429f4e ">Sell</b-dropdown-item>
                    <b-dropdown-item style="background: #616dce">Buy</b-dropdown-item>
                    <b-dropdown-item style="background: #5c5e7a ">Square Off</b-dropdown-item>
                    <b-dropdown-item style="background: #b5f345">Edit</b-dropdown-item>
                    <b-dropdown-item style="background: #c74d4d">Delete</b-dropdown-item>
                </b-dropdown>
            </template>
            </b-table>
<!--            <span class="text-muted"        >Showing {{ rows === 0 ? 0 : pageStart }} to        {{ pageEnd }}        of {{ rows }} Users      </span>-->
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                aria-controls="my-table"
                align="right"
            ></b-pagination>
        </b-card>
    <order-history-model v-if="orderHistoryModel"
                         :order-history-modal="orderHistoryModel"
                         @click="toggleShowHistoryModel"
                         @close-modal="toggleShowHistoryModel">

    </order-history-model>
    <add-script-model v-if="addScriptModel"
                      :add-script-model="addScriptModel"
                      @click="toggleShowAddScriptModel"
                      @close-modal="toggleShowAddScriptModel">

    </add-script-model>
    </div>

</template>


<script>
// import vSelect from 'vue-select'
import orderHistoryModel from "./orderHistoryModel.vue";
import addScriptModel from "@/DemoPages/UserPages/addScriptModel.vue";

export default {

    name: "ManageOrder",
    components: {
        // vSelect,
        orderHistoryModel,
        addScriptModel,
    },
    data() {
        return {
            // $refs: {
            //     orderHistoryModel,
            // },

            orderHistoryModel:false,
            addScriptModel:false,
            perPageOptions: [3, 5, 10],
            pageSize: 3,
            pageNo: 1,
            sortBy: 'sr',
            sortDesc: false,
            currentPage: 1,
            searchValue: '',
            tableColumns: [
                {
                    key: 'sr',
                    label: 'Sr',
                    sortable: true
                },
                {
                    key: 'script',
                    label: 'Script',
                    sortable: true
                },
                {
                    key: 'total_quantity',
                    label: 'Total quantity',
                    sortable: true
                },
                {
                    key: 'created_date',
                    label: 'Created date',
                    sortable: true
                },
                {
                    key: 'order_history',
                    label: 'Order History',
                    sortable: true
                },
                {
                    key: 'execute_date',
                    label: 'Last Order Execute Date',
                    sortable: true
                },
                {
                    key: 'automation_switch',
                    label: 'Automantion Switch',
                    sortable: true
                },
                {
                    key: 'action',
                    label: 'Action',
                    sortable: true
                },
            ],
            items: [
                {
                    sr: 1,
                    script: 'Script1',
                    total_quantity: '30',
                    created_date: '15-03-2023',
                    order_history:'21-03-2023',
                    execute_date: '16-03-2023',
                    automation_switch: 'switch',
                    action: 'Action'
                },
                {
                    sr: 2,
                    script: 'Script2',
                    total_quantity: '33',
                    created_date: '15-03-2023',
                    order_history:'20-03-2023',
                    execute_date: '16-03-2023',
                    automation_switch: 'switch',
                    action: 'Action'
                },
                {
                    sr: 3,
                    script: 'Script3',
                    total_quantity: '30',
                    created_date: '15-03-2023',
                    order_history:'20-03-2023',
                    execute_date: '16-03-2023',
                    automation_switch: 'switch',
                    action: 'Action'
                },
                {
                    sr: 4,
                    script: 'Script4',
                    total_quantity: '30',
                    created_date: '15-03-2023',
                    order_history:'20-03-2023',
                    execute_date: '16-03-2023',
                    automation_switch: 'switch',
                    action: 'Action'
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
                    return item.sr.toLocaleString().includes(this.searchValue) || item.script.includes(this.searchValue)
                        || item.total_quantity.includes(this.searchValue) || item.created_date.includes(this.searchValue)
                        || item.execute_date.includes(this.searchValue)
                })
            }
            return this.items
        },
        totalPages() {
            return this.items > (this.pageSize * this.pageNo)
                ? this.pageSize * this.pageNo
                : this.items;
            //this.items && this.items.length > 0 ? this.items.length / this.pageSize : 0
        },
        // pageStart() {
        //     return this.pageSize * (this.pageNo - 1) + 1;
        //     },
        // pageEnd() {
        //     return this.items >
        //     this.pageSize * this.pageNo
        //         ? this.pageSize * this.pageNo
        //         : this.items;
        //     },
    },
    methods: {

        changePerPage(val) {
            this.pageSize = val;
            this.pageNo = 1;
            return this.items;
        },
        toggleShowHistoryModel() {
            this.orderHistoryModel = !this.orderHistoryModel
        },
        toggleShowAddScriptModel() {
            this.addScriptModel = !this.addScriptModel
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