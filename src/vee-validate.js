'use strict'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Validator.localize("zh_CN", zh_CN);
//覆盖原来的提示方式
const dictionary = {
    zh_CN: {
        messages: {
            email: "邮箱的格式不正确",
            required: (field) => `${field}必须填写`
        },
        attributes: {
            email: '邮箱',
            phone: '手机号'
        }
    }
};
Validator.localize(dictionary);

export default VeeValidate