<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" right>
                            <span slot="button-content">
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt="">
                                </div>
                            </span>
                            <div class="custom-dropdown">
                                <button type="button" tabindex="0" class="dropdown-item" @click="getChangePassword" style="cursor: pointer">Change Password</button>
                                <button type="button" tabindex="0" class="dropdown-item" @click="getDashboard" style="cursor: pointer">
                                    Logout</button>
                            </div>

                            <!--                            <h6 tabindex="-1" class="dropdown-header">Header</h6>-->
                            <!--                            <button type="button" tabindex="0" class="dropdown-item">Actions</button>-->
                            <!--                            <div tabindex="-1" class="dropdown-divider"></div>-->
                            <!--                            <button type="button" tabindex="0" class="dropdown-item">Dividers</button>-->
                        </b-dropdown>
                    </div>
                    <!--                    <div class="widget-content-left  ml-3 header-user-info">-->
                    <!--                        <div class="widget-heading">Alina Mclourd</div>-->
                    <!--                        <div class="widget-subheading">VP People Manager</div>-->
                    <!--                    </div>-->
                    <!--                    <div class="widget-content-right header-user-info ml-3">-->
                    <!--                        <b-btn v-b-tooltip.hover title="Tooltip Example" class="btn-shadow p-1" size="sm" variant="info">-->
                    <!--                            <font-awesome-icon icon="calendar-alt" class="mr-1 ml-1"/>-->
                    <!--                        </b-btn>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faAngleDown,
    faCalendarAlt,
    faTrashAlt,
    faCheck,
    faFileAlt,
    faCloudDownloadAlt,
    faFileExcel,
    faFilePdf,
    faFileArchive,
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faAngleDown,
    faCalendarAlt,
    faTrashAlt,
    faCheck,
    faFileAlt,
    faCloudDownloadAlt,
    faFileExcel,
    faFilePdf,
    faFileArchive,
    faEllipsisH,
);

export default {
    // components: {
    //     'font-awesome-icon': FontAwesomeIcon,
    // },
    data: () => ({

    }),

    methods:{
        getDashboard()
        {

            this.$router.push({
                name:'login-boxed',
            })
        },
        getChangePassword()
        {
            this.$router.push({
                name:'ChangePassword'
            })
        }
    }
}


</script>
<style>
.custom-dropdown {
    float: left;
    min-width: 15rem;
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    color: #5a5a5a;
    text-align: left;

}
</style>
