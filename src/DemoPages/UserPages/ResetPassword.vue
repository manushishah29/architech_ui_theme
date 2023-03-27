<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <!--                    <div class="app-logo-inverse mx-auto mb-3"/>-->

                    <div class="modal-dialog w-100 mx-auto">
                        <validation-observer ref="loginForm" #default="{ invalid }">
                            <b-form @submit.prevent="onSubmit">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <b-form-group id="exampleInputGroup1"
                                                      label-for="exampleInput1">
                                            <validation-provider name="Password" rules="required|max:15|min:6" #default="{ errors }">
                                                <label>New Password </label>
                                                <b-form-input id="exampleInput1"
                                                              v-model="password"
                                                              type="password"
                                                              :state="errors.length > 0 ? false : null"
                                                              placeholder="Enter new password...">
                                                </b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </validation-provider>
                                        </b-form-group>
                                        <b-form-group id="exampleInputGroup1"
                                                      label-for="exampleInput1">
                                            <validation-provider name="Reset Password" rules="required|compare-password:@Password" #default="{ errors }">
                                                <label>Reset New Password </label>
                                                <b-form-input id="exampleInput1"
                                                              v-model="reset_password"
                                                              type="password"
                                                              :state="errors.length > 0 ? false : null"
                                                              placeholder="Enter reset new password...">
                                                </b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </validation-provider>
                                        </b-form-group>

                                    </div>
                                    <div class="modal-footer clearfix">
                                        <div class="float-right">
                                            <b-button variant="primary" type="submit" size="lg">Update Password</b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-form>
                        </validation-observer>
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
import {ValidationObserver,ValidationProvider} from "vee-validate";
import {required, max, min} from "@/lib/Validators";
export default {
    name: "ResetPassword",
    data(){
        return{
            required,
            password: '',
            reset_password:'',
            max,
            min
        }
    },
    components:{
        ValidationProvider,
        ValidationObserver,

    },
    methods:{
        getDashboard()
        {
            this.$router.push({
                name:'login-boxed',
            })
        },
        async onSubmit(){
            const result = await this.$refs.loginForm.validate();
            // eslint-disable-next-line no-console
            console.log('Submit successfull', result)
            if(result){
                this.getDashboard()
            }

            // this.getDashboard()
        },
    }
}
</script>

<style scoped>

</style>