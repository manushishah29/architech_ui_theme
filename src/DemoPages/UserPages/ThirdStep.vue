<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="row">
                    <div class="col-md-6">

                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Acceleration  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Acceleration ">
                            </b-form-input>
                        </b-form-group>

                    </div>
                    <div class="col-md-6">
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Max Acceleration :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Max Acceleration">
                            </b-form-input>

                        </b-form-group>

                    </div>
                </div>
            </b-col>

        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "ThirdStep"
}
</script>

<style scoped>

</style>