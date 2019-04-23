import sdk from "./module_sdk.js"
console.log("加载对应的平台插件")

window.pay = ()=>{
	sdk.say();
	sdk.pay();
}