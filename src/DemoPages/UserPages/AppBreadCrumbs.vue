<template>
        <b-breadcrumb  v-if="location === '/dashboard'">
            <b-breadcrumb-item :active="false">Dashboard</b-breadcrumb-item>
        </b-breadcrumb>
        <b-breadcrumb v-else-if="location === '/project1/manageOrder'">
            <b-breadcrumb-item href="/dashboard" :active="false"> Dashboard </b-breadcrumb-item>
            <b-breadcrumb-item :active="true"> Project1 > Manage Order</b-breadcrumb-item>
        </b-breadcrumb>
        <b-breadcrumb v-else-if="location === '/manageScriptExpiry'">
        <b-breadcrumb-item :active="false"> Manage Script And Expiry </b-breadcrumb-item>
        </b-breadcrumb>
        <b-breadcrumb v-else-if="location === '/defaultTemplate'">
        <b-breadcrumb-item :active="false">Default Template </b-breadcrumb-item>
         </b-breadcrumb>

</template>

<script>
export default {
    name: "AppBreadCrumbs",
    data(){
        return{
            location: window.location.pathname,
            show: true
        }
    },
    watch: {
        $route: function (newVal, oldVal) {
            // eslint-disable-next-line no-console
            if (newVal && newVal !== oldVal) {
                this.location = newVal.fullPath
            }
        }
    }
}
</script>

<style scoped>

</style>