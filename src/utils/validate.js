/**
 * reg: 校验规则
 * emptymsg: 无内容提示
 * errormsg: 校验提示
 * rule 校验规则
 * value 表单值
 * callback 回调
 */
function common (rule, value, callback, reg, emptymsg, errormsg) {
  if (value === '' || value === undefined) {
    if (rule.require) {
      callback(new Error(emptymsg))
    } else {
      callback()
    }
  } else if (reg.test(value)) {
    callback()
  } else {
    callback(new Error(errormsg))
  }
}

// 不验证
export function novalid (rule, value, callback) {
  const reg = /[\s\S]*/
  common(rule, value, callback, reg, '不能为空')
}
// 手机号
export function phone (rule, value, callback) {
  const reg = /^1([\d]{10})$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 邮箱
export function email (rule, value, callback) {
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 纯数字
export function number (rule, value, callback) {
  const reg = /^[0-9]+$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 支付数码
export function paynumber (rule, value, callback) {
  const reg = /^[0-9]{6}$/
  common(rule, value, callback, reg, '不能为空', '请输入6位数字支付密码')
}
// 纯字母
export function letter (rule, value, callback) {
  const reg = /[a-zA-Z]+/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 数字与字母
export function numletter (rule, value, callback) {
  const reg = /^[0-9A-Za-z]{6,20}$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 密码
export function password (rule, value, callback) {
  const reg = /^[0-9A-Za-z~!@#$%^&*]{6,16}$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 图形验证码
export function pricture (rule, value, callback) {
  const reg = /^[0-9A-Za-z]{4,6}$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}
// 英文和中文和数字 [\u4e00-\u9fa5]
export function LetterNumberWord (rule, value, callback) {
  const reg = /^[0-9A-Za-z\u4e00-\u9fa5]+$/
  common(rule, value, callback, reg, '不能为空', '格式错误')
}

// }
// email:{
//     validator: function (value, param){
//         if(value=='')return true
//         var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
//         return reg.test(value)
//     },
//     message: '邮箱格式不正确'
// },
// length:{
//     validator: function (value,param){
//         if(value=='')return true
//         return value.length>=param[0] && value.length<=param[1]
//     },
//     message: '长度必须在{0}到{1}位之间'
// },
// min:{
//     validator:function(value,param){
//         if(value=='')return true
//         return parseFloat(value)>=param[0]
//     },
//     message: '数值必须都不小于{0}'
// },
// max:{
//     validator:function(value,param){
//         if(value=='')return true
//         return parseFloat(value)<=param[0]
//     },
//     message: '数值必须都不大于{0}'
// },
// minout:{
//     validator:function(value,param){
//         if(value=='')return true
//         return parseFloat(value)>param[0]
//     },
//     message: '数值必须都大于{0}'
// },
// maxout:{
//     validator:function(value,param){
//         if(value=='')return true
//         return parseFloat(value)<param[0]
//     },
//     message: '数值必须都小于{0}'
// },
// between:{
//     validator:function(value,param){
//         if(value=='')return true
//         return value>=param[0] && value<=param[1]
//     },
//     message: '数值必须在{0}到{1}位之间'
// },
// passEQ:{
//     validator: function(value, param){
//         if(value=='')return true
//         var passOne = $(this).closest('form').find('[name='+param[0]+']')[0]
//         return $(passOne).val()==value
//     },
//     message: '两次密码输入必须一致'
// },
// int:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^\d+$/
//         return reg.test(value)
//     },
//     message: '只能输入正整数'
// },
// num:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^[+-]?\d+(\.\d+)?$/
//         return reg.test(value)
//     },
//     message: '只能输入数字'
// },
// tel:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^(\({0,1}\d{3,4})\){0,1}(-){0,1}(\d{7,8})$/
//         return reg.test(value)
//     },
//     message: '数据不合法,必须是手机或电话,座机带区号'
// },
// phone:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/
//         return reg.test(value)
//     },
//     message: '请填写正确的手机号码'
// },
// base:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /[`~!@# $%^&*()+<>?:"{},.\/;'[\]]/im
//         return !reg.test(value)
//     },
//     message: '不能含有特殊字符'
// },
// card:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
//         return reg.test(value)
//     },
//     message: '身份证号只能为15位或18位'
// },
// size:{
//     validator:function(value,param){
//         if(value=='')return true
//         return value.length==param[0]
//     },
//     message: '长度必须为{0}位'
// },
// letter: {
//     validator:function(value,param){
//         if(value=='')return true
//         var reg = /^[0-9a-zA-Z]*$/g
//         return reg.test(value)
//     },
//     message: '只能输入数字或字母'
// },
// name:{
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /^[\u4E00-\u9FA5A-Za-z]{2,50}$/
//         return reg.test(value)
//     },
//     message: '请输入正确的姓名,只能是中文或英文'
// },
// fox: {
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /\+?\d{3,4}-\d{6,}/
//         return reg.test(value)
//     },
//     message: '请输入正确的传真号码'
// },
// QQ: {
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /[1-9][0-9]{4,}/
//         return reg.test(value)
//     },
//     message: 'QQ号码只能是四位以上纯数字'
// },
// /*不能为0*/
// withoutZero: {
//     validator: function(value, param){
//         if(value == '')return true
//         return value != 0
//     },
//     message: '不能为0'
// },
// /*可以输入括号和减号*/
// parentheses: {
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /[`~!@# $%^&*+<>?:"{},.\/;'[\]]/im
//         return !reg.test(value)
//     },
//     message: '只允许数字和英文字母,-和()'
// },
// /*非中文*/
// nonChinese: {
//     validator: function(value, param){
//         if(value == '')return true
//         var reg = /[\u4e00-\u9fa5]/
//         return !reg.test(value)
//     },
//     message: '密码只能由英文、数字、特殊字符组成'
// }

// export default {
//     data() {
//         var valname = (rule, value, callback) => {

//         }
//         var valphone = (rule, value, callback) => {

//         }
//         var valmoney = (rule, value, callback) => {

//         }
//         var valonetoten = (rule, value, callback) => {

//         }
//         var valmaxthirty = (rule, value, callback) => {

//         }
//         var validnumber = (rule, value, callback) => {

//         }
//     }
// }
