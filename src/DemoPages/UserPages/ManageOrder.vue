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
                        <label class="mt-2 mx-2">Show </label>
                        <select v-model="pageSize" class="dropdown-style">
                            <option v-for="(item,index) in perPageOptions" :key="index" :value="item" >{{item}}</option>
                        </select>
                        <label class="mt-2 mx-2">Entries </label>

                    </b-col>
                    <!-- Search -->
                    <b-col
                        cols="12"
                        md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-form-input
                                v-model="searchValue"
                                style="width: 60%"
                                class="d-inline-block mr-2"
                                placeholder="Search by"
                            />
                            <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success w-22" @click="toggleShowAddScriptModel">
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
                class="mt-3 table table-bordered"
                responsive="sm"
            >
                <template #cell(script)="data"><div class="text-wrap">{{data.value}}</div></template>
                <template #cell(order_history)="data">
                    <b-link @click="toggleShowHistoryModel">{{data.value}}</b-link>
                </template>
                <template #cell(automation_switch)="data">
                    <div>
                        <b-form-checkbox switch @click.native.prevent="showAlert(data.index)" v-model="data.value"></b-form-checkbox>
                    </div>
                </template>
                <template #cell(action)>
                    <b-dropdown no-caret variant="link" >
                            <span slot="button-content">
                                  <font-awesome-icon icon="ellipsis-v" />
                            </span>
                            <b-dropdown-item><h5><b-badge style="background: #429f4e">Buy</b-badge></h5> </b-dropdown-item>
                            <b-dropdown-item><h5><b-badge style="background: #616dce">Sell</b-badge></h5></b-dropdown-item>
                            <b-dropdown-item><h5><b-badge style="background: #5c5e7a ">Square off</b-badge></h5></b-dropdown-item>
                            <b-dropdown-item> <h5><b-badge style="background: #b5f345;">Edit</b-badge></h5></b-dropdown-item>
                            <b-dropdown-item><h5><b-badge style="background: #c74d4d">Delete</b-badge></h5></b-dropdown-item>
                    </b-dropdown>
                </template>
            </b-table>
            <!--            <span class="text-muted"        >Showing {{ rows === 0 ? 0 : pageStart }} to        {{ pageEnd }}        of {{ rows }} Users      </span>-->
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                class="mt-2"
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

import orderHistoryModel from "./orderHistoryModel.vue";
import addScriptModel from "@/DemoPages/UserPages/addScriptModel.vue";


export default {

    name: "ManageOrder",
    components: {

        orderHistoryModel,
        addScriptModel,
    },
    data() {
        return {
            // $refs: {
            //     orderHistoryModel,
            // },
            index:0,

            orderHistoryModel:false,
            switchModel:false,
            addScriptModel:false,
            perPageOptions: [3, 5, 10],
            pageSize: 3,
            pageNo: 1,
            sortBy: 'script',
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
                    sortable: true,


                },
                {
                    key: 'action',
                    label: 'Action',
                    sortable: true,
                    thClass: "text-center"
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
                    automation_switch: false,
                    action: 'Action'
                },
                {
                    sr: 2,
                    script: 'Script2',
                    total_quantity: '33',
                    created_date: '17-03-2023',
                    order_history:'20-03-2023',
                    execute_date: '25-03-2023',
                    automation_switch: false,
                    action: 'Action'
                },
                {
                    sr: 3,
                    script: 'Script3',
                    total_quantity: '30',
                    created_date: '20-03-2023',
                    order_history:'27-03-2023',
                    execute_date: '17-03-2023',
                    automation_switch: false,
                    action: 'Action'
                },
                {
                    sr: 4,
                    script: 'Script4',
                    total_quantity: '30',
                    created_date: '11-03-2023',
                    order_history:'20-03-2023',
                    execute_date: '18-03-2023',
                    automation_switch: false,
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
        showAlert(itemIndex) {
            // Use sweetalert2
            // eslint-disable-next-line no-console
            console.log("Hello from sweet alert")
            this.$swal({
                // title: 'Are you sure?',
                // text: "Are you sure want to check this item!",
                // type: 'warning',
                // showCancelButton: true,
                // confirmButtonColor: '#56CC9D',
                // cancelButtonColor: 'primary',
                // confirmButtonText: 'Yes Check it!',
                title: 'Are you sure?',
                icon: 'info',
                html: 'Are you sure want to check this item!',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Yes Check it!',
                confirmButtonColor: '#56CC9D',
                cancelButtonColor: 'primary',

            }).then((result) => {
                // eslint-disable-next-line no-console
                this.items.map((item, index) => {
                    if (itemIndex === index) {
                        item.automation_switch = result.isConfirmed
                    }
                    return item
                })
            })
        },
    },
}
</script>

<style>
.dropdown-item {
    display: block;
    width: 100%;
    padding: 0rem 0.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.dropdown-menu {
    min-width: 8rem;
    padding: 0.35rem 0;
}
.badge{
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
}
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