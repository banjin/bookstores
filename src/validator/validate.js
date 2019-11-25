// 自己创建
import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate 
const dictionary = {
    zh_CN: {
       messages: {
         email: () => '请输入正确的邮箱格式',
         required: ( field )=> "请输入" + field
       },
       attributes:{
         email:'邮箱',
         password:'密码',
         name: '账号',
         phone: '手机'
       }
   }
 };
 
 Validator.updateDictionary(dictionary);