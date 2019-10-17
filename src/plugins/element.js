import Vue from 'vue'
import {Loading, MessageBox, Message, Steps, Step, 
    Button, Form, FormItem, Input, Select, Option, DatePicker, Upload, TimePicker,
    Cascader, Checkbox
} from 'element-ui'
import '../assets/theme/index.css'

/**
 * element-UI使用规范：
 * 1. 本项目采用按需引入
 * 2. 主题的修改：使用命令行主题工具：element-theme 使用参考文档：https://element.eleme.cn/#/zh-CN/component/custom-theme
 *    npm主题生成指令：npm run build:theme
 */

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.use(Steps);
Vue.use(Button);
Vue.use(Step);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(TimePicker);
Vue.use(Cascader);
Vue.use(Checkbox);