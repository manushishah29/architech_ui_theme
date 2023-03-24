<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <!--                    <div class="app-logo-inverse mx-auto mb-3"/>-->

                    <div class="modal-dialog w-100 mx-auto">

                        <div class="modal-content">
                            <h5 class="text-center mt-3">Change Password</h5>
                            <div class="modal-body">

                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                >
                                    <Label for="exampleEmail">Old Password</Label>
                                    <b-form-input id="exampleInput1"
                                                  type="password"
                                                  required
                                                  placeholder="Enter Old Password...">
                                    </b-form-input>
                                    <Label for="exampleEmail">New Password</Label>
                                    <b-form-input id="exampleInput1"
                                                  type="password"
                                                  required
                                                  placeholder="Enter New Password...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <Label for="exampleEmail">Reset New Password</Label>
                                    <b-form-input id="exampleInput2"
                                                  type="password"
                                                  required
                                                  placeholder="Enter Reset New Password...">
                                    </b-form-input>
                                </b-form-group>
                                <!--                                <b-form-checkbox name="check" id="exampleCheck">-->
                                <!--                                    Keep me logged in-->
                                <!--                                </b-form-checkbox>-->
                                <!--                                <div class="divider"/>-->
                                <!--                                <h6 class="mb-0">-->
                                <!--                                    No account?-->
                                <!--                                    <a href="javascript:void(0);" class="text-primary">Sign up now</a>-->
                                <!--                                </h6>-->
                            </div>
                            <div class="modal-footer clearfix">

                                <div class="float-right">
                                    <b-button variant="primary" size="lg" @click="getDashboard">Change Password</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; Kavisha 2023
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChangePassword",
    methods:
        {
            getDashboard(){
                this.$router.push({
                    name:'Dashboard',
                })
            }
        }
}
</script>

<style scoped>

</style>