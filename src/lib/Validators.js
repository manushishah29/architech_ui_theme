import { extend } from "vee-validate";
import {
    alpha as rule_alpha,
    alpha_dash as rule_alpha_dash,
    alpha_num as rule_alpha_num,
    between as rule_between,
    confirmed as rule_confirmed,
    digits as rule_digits,
    email as rule_email,
    integer as rule_integer,
    length as rule_length,
    min as rule_min,
    numeric as rule_numeric,
    regex as rule_regex,
    required as rule_required,
    max as rule_max,
    alpha_spaces as rule_alpha_spaces,
} from "vee-validate/dist/rules";

import {
    validatorComparePassword,

} from "@/lib/validators_compare";

export const required = extend("required", rule_required);

export const email = extend("email", rule_email);

export const min = extend("min", rule_min);

export const max = extend("max", rule_max);

export const confirmed = extend("confirmed", rule_confirmed);

export const regex = extend("regex", rule_regex);

export const between = extend("between", rule_between);

export const alpha = extend("alpha", rule_alpha);

export const alphaSpaces = extend("alpha-spaces", rule_alpha_spaces);

export const integer = extend("integer", rule_integer);

export const digits = extend("digits", rule_digits);

export const alphaDash = extend("alpha-dash", rule_alpha_dash);

export const alphaNum = extend("alpha-num", rule_alpha_num);

export const length = extend("length", rule_length);

export const numeric = extend("numeric", rule_numeric);

export const compare_password = extend("compare-password", {
    params: ["target"],
    validate: validatorComparePassword,
    message: "Password doesn't match",
});