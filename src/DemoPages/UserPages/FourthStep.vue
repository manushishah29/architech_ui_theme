<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="row">
                    <div class="col-md-6">

                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>RSI Periods   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter RSI Periods  ">
                            </b-form-input>
                        </b-form-group>

                    </div>
                    <div class="col-md-6">
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Level :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Level ">
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
    name: "FourthStep"
}
</script>

<style scoped>

</style>