<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="row">
                    <div class="col-md-6">

                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Traget-Stoploss Type :</label>
                            <select name="script" id="script" class="w-100 dropdown-style">
                                <option value="script1">Point</option>
                                <option value="script2">Percent</option>

                            </select>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Target Mode  : </label>
                            <span class="d-flex mb-3"
                            >Off<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;" class="custom-switch">On</b-form-checkbox>
                    </span></span>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Target :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Target">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>SL Mode  : </label>
                            <span class="d-flex mb-3"
                            >Off<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;" class="custom-switch">On</b-form-checkbox>
                    </span></span>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>SL  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter No Entry After (HHMM)">
                            </b-form-input>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Buffer :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Square Off Time (HHMM)">
                            </b-form-input>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Max Trade Per Day  : </label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Minimum Spread">
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
    name: "SecondStep"
}
</script>

<style scoped lang="scss">
.custom-switch {
    padding-left: 2.25rem;
    /* cursor: pointer; */
    width: 100px;
    height: 40px;
}
.dropdown-style {
    color: #6c758e;
    background-color: white;
    padding: 0.375rem 0.75rem;
    //border-color: #ced4da;
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}
</style>