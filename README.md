# 相关问题的说明

1.基础信息获取的封装问题
  查看main.js和ext.json，和微信小程序本身一致。
  
2.换肤问题
   请查看 /static/styles/skin.less 和 App.vue。

3.APP第三方授权问题

第三方app一般是h5方式，查看自定义模板template.h5.html和外部扩展目录。
static 目录结构说明

```javascript
├── ext_app    // 外部平台列表
└── vanke      // 使用名称为vanke平台的js
   ├── index.js     //我们的js
   └── module_sdk.js    //p1平台的js—sdk

```

h5编译模式下，因为没有多余的可扩展字段能用暂时使用title字段，后面更新后可template.h5.html里面改。

1.应用名称和应用标题用name

2.title用于外部加载不同平台的js，如上面titile设置为vanke

使用

1.自身平台的方法名称固定并列出,自身程序直接调用这个方法 如 支付:pay,挂到window对象上。

2.在插件目录index.js实现这一方法,不同sdk不同的实现。

3.sdk的具体使用参考三方app的api文档