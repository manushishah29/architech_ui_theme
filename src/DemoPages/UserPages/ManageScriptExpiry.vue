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
                        <label class="mx-1">Show : </label>
                        <v-select
                            v-model="pageSize"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50 mt-1"
                            @input="changePerPage"
                        />

                    </b-col>
                    <!-- Search -->
                    <b-col
                        cols="12"
                        md="6">
                        <div class="d-flex align-items-center justify-content-end">
                            <b-form-input
                                v-model="searchValue"
                                class="d-inline-block mr-1"
                                placeholder="Search here ..."
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
                <template #cell(automation_switch)><b-form-checkbox switch size="lg"></b-form-checkbox></template>
                <template #cell(action)>  <font-awesome-icon icon="edit" /></template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                aria-controls="my-table"
                align="right"
            ></b-pagination>
<!--            <p class="mt-3">Current Page: {{ currentPage }}</p>-->
        </b-card>


    </div>
</template>

<script>
import vSelect from "vue-select";

export default {
    name: "ManageScriptExpiry",
    components: {
        vSelect,
    },
    data() {
        return {
            perPageOptions: [3, 5, 10],
            pageSize: 3,
            pageNo: 1,
            sortBy: 'sr',
            sortDesc: false,
            perPage: 3,
            currentPage: 1,
            searchValue: '',
            tableColumns: [
                {
                    key: 'no',
                    label: 'No',
                    sortable: true
                },
                {
                    key: 'script_name',
                    label: 'Script Name',
                    sortable: true
                },
                {
                    key: 'expiry',
                    label: 'Expiry',
                    sortable: true
                },
                {
                    key: 'update_date',
                    label: 'Update date',
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
                    no: 1,
                    script_name: 'Script1',
                    expiry: '15-03-2023',
                    update_date: '16-03-2023',
                    action: 'Action'
                },
                {
                    no: 2,
                    script_name: 'Script2',
                    expiry: '15-03-2023',
                    update_date: '16-03-2023',
                    action: 'Action'
                },
                {
                    no: 3,
                    script_name: 'Script3',
                    expiry: '15-03-2023',
                    update_date: '16-03-2023',
                    action: 'Action'
                },
                {
                    no: 4,
                    script_name: 'Script4',
                    expiry: '15-03-2023',
                    update_date: '16-03-2023',
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
        }
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
    },
}
</script>

<style scoped>

</style>