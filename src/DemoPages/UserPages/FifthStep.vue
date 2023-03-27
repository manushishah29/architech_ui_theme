<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="row">
                    <div class="col-md-6">



                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Instrument :</label>
                            <b-form-input id="exampleInput2"
                                          type="text"
                                          required
                                          placeholder="Enter Instrument">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Product Type :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Product Type">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Order Type  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Order Type ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Select Point Or Percent :</label>
                            <select name="script" id="script" class="w-100 dropdown-style">
                                <option value="script1">Point</option>
                                <option value="script2">Percent</option>

                            </select>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Limit Order Buffer :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Limit Order Buffer ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Spread  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Spread ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Order Quantity  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Order Quantity ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Entry Candle  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Entry Candle ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Manage Orders  : </label>
                            <span class="d-flex mb-3"
                            >No<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;" class="custom-switch">Yes</b-form-checkbox>
                    </span></span>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Disable Buy-Sell : </label>
                            <span class="d-flex mb-3"
                            >No<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;" class="custom-switch">Yes</b-form-checkbox>
                    </span></span>
                        </b-form-group>

                    </div>
                    <div class="col-md-6">
                        <b-form-group id="exampleInputGroup2"
                                      elabl-for="exampleInput2">
                            <label>Disable Short-Cover  : </label>
                            <span class="d-flex mb-3"
                            >No<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;">Yes</b-form-checkbox>
                    </span></span>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Strategy Tag   :</label>
                            <b-form-input id="exampleInput2"
                                          type="text"
                                          required
                                          placeholder="Enter Strategy Tag  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label> AlgoFox Trading Key :</label>
                            <b-form-input id="exampleInput2"
                                          type="text"
                                          required
                                          placeholder="Enter Entry Candle ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Button Trading : </label>
                            <span class="d-flex mb-3"
                            >No<span class="mx-3">
                        <b-form-checkbox switch size="xxl" style="cursor: pointer;" >Yes</b-form-checkbox>
                    </span></span>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Buy Order Quantity   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Buy Order Quantity  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Sell Order Quantity   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="EnterSell Order Quantity  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Short Order Quantity  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Short Order Quantity  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Cover Order Quantity   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Cover Order Quantity  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Button Horizontal Position   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Button Horizontal Position  ">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Button Vertical Position   :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Button Vertical Position  ">
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
    name: "FifthStep"
}
</script>

<style scoped lang="scss">
.custom-switch {
    padding-left: 2.25rem;
    /* cursor: pointer; */
    width: 100px;
    height: 35px;
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