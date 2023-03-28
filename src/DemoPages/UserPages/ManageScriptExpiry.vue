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
                        <label class="mx-1 mt-2">Show </label>
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
                class="mt-3 table table-bordered"
                responsive="sm"
            >
                <template #cell(script_name)="data"> <div class="text-wrap">{{data.value}}</div></template>
                <template #cell(action)> <font-awesome-icon icon="edit" style="cursor: pointer"  @click="toggleEditScriptExpiry"/></template>
            </b-table>
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="pageSize"
                class="mt-2"
                aria-controls="my-table"
                align="right"
            ></b-pagination>
<!--            <p class="mt-3">Current Page: {{ currentPage }}</p>-->
        </b-card>

<edit-script-expiry-model v-if="editScriptExpiryModel"
                          :edit-script-expiry-model="editScriptExpiryModel"
                          @click="toggleEditScriptExpiry" @close-model="toggleEditScriptExpiry">

</edit-script-expiry-model>
    </div>
</template>

<script>

import editScriptExpiryModel from "@/DemoPages/UserPages/editScriptExpiryModel.vue";

export default {
    name: "ManageScriptExpiry",
    components: {
        editScriptExpiryModel,
    },
    data() {
        return {
            perPageOptions: [3, 5, 10],
            pageSize: 3,
            pageNo: 1,
            sortBy: 'script_name',
            sortDesc: false,
            perPage: 3,
            currentPage: 1,
            searchValue: '',
            editScriptExpiryModel:false,
            switchModel:false,

            tableColumns: [
                {
                    key: 'no',
                    label: 'No',
                    sortable: true
                },
                {
                    key: 'script_name',
                    label: 'Script Name',
                    sortable: true,

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
                    expiry: '30-03-2023',
                    update_date: '18-03-2023',
                    action: 'Action'
                },
                {
                    no: 3,
                    script_name: 'Script3',
                    expiry: '31-03-2023',
                    update_date: '20-03-2023',
                    action: 'Action'
                },
                {
                    no: 4,
                    script_name: 'Script4',
                    expiry: '25-03-2023',
                    update_date: '21-03-2023',
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
                    return item.no.toLocaleString().includes(this.searchValue) || item.script_name.includes(this.searchValue)
                        || item.expiry.includes(this.searchValue) || item.update_date.includes(this.searchValue)

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
        toggleEditScriptExpiry() {
            this.editScriptExpiryModel = !this.editScriptExpiryModel
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