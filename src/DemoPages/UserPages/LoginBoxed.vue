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
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome back,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1">
                                    <validation-provider
                                        #default="{errors }"
                                        name="Email"
                                        rules="required|email"
                                    >
                                        <label>Email </label>
                                        <b-form-input id="exampleInput1"
                                                      v-model="user_email"
                                                      type="email"
                                                      :state="errors.length > 0 ? false : null"
                                                      placeholder="Enter email...">
                                        </b-form-input>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                                  label-for="exampleInput2">
                                    <validation-provider name="Password" rules="required|max:6" #default="{ errors }">
                                        <Label>Password</Label>
                                        <b-form-input id="exampleInput2"
                                                      type="password"
                                                      :state="errors.length > 0 ? false : null"
                                                      v-model="password"
                                                      placeholder="Enter password...">
                                        </b-form-input>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </validation-provider>
                                    </b-form-group>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <a href="javascript:void(0);" class="btn-lg btn btn-link" @click="getForgotPassword">Forgot
                                        Password</a>
                                </div>
                                <div class="float-right">
                                    <b-button variant="primary" type="submit" size="lg">Login</b-button>
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
import {required,email, max, min} from "@/lib/Validators";

export default {
    name:'Login',
    data(){
        return{
            required,
            email,
            user_email: '',
            password: '',
            max,
            min
        }
    },
    components:{
      ValidationProvider,
      ValidationObserver,

    },
    methods: {

       async onSubmit(){
            const result = await this.$refs.loginForm.validate();
            // eslint-disable-next-line no-console
            console.log('Submit successfull', result)
           if(result){
               this.getDashboard()
           }

            // this.getDashboard()
        },
        getDashboard(){
            this.$router.push({
                name:'Dashboard',
            })
        },
        getForgotPassword(){
            this.$router.push({
                name:'ForgotPassword',
            })
        }
    }
}

</script>
