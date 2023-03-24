<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <div class="row">
                    <div class="col-md-6">

                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Intraday Mode  : </label>
                            <span class="d-flex mb-3"
                            >Off<span class="mx-3">
              <b-form-checkbox switch size="xxl" style="cursor: pointer;" class="custom-switch">On</b-form-checkbox>
            </span></span>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Select Script :</label>
                            <b-dropdown id="dropdown-offset" offset="25" text="Select Script" class="w-100">
                                <b-dropdown-item href="#">Script1</b-dropdown-item>
                                <b-dropdown-item href="#">Script2</b-dropdown-item>
                                <b-dropdown-item href="#">Script3</b-dropdown-item>
                            </b-dropdown>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Trade Start From (HHMM) :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter Trade Start From (HHMM)">
                            </b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>No Entry After (HHMM)  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Enter No Entry After (HHMM)">
                            </b-form-input>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Square Off Time (HHMM)  :</label>
                            <b-form-input id="exampleInput2"
                                          type="number"
                                          required
                                          placeholder="Square Off Time (HHMM)">
                            </b-form-input>

                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                                      label-for="exampleInput2">
                            <label>Minimum Spread : </label>
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
    name: "FirstStep"
}
</script>

<style scoped lang="scss">
.custom-switch {
    padding-left: 2.25rem;
    /* cursor: pointer; */
    width: 100px;
    height: 40px;
}
</style>