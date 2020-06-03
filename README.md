# vue-admin-template

> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

## 分支说明 
permission-control，权限分支
master，普通分支

[线上地址](http://panjiachen.github.io/vue-admin-template)

[国内访问](https://panjiachen.gitee.io/vue-admin-template)

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建，若你想使用旧版本，可以切换分支到[tag/3.11.0](https://github.com/PanJiaChen/vue-admin-template/tree/tag/3.11.0)，它不依赖 `vue-cli`。

## Extra

如果你想要根据用户角色来动态生成侧边栏和 router，你可以使用该分支[permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

## 相关项目

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template)

- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

写了一个系列的教程配套文章，如何从零构建后一个完整的后台项目:

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板,专门针对本项目的文章,算作是一篇文档)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)



## vuex

vuex中的store分模块管理，需要在store的index.js中引入各个模块，为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名

## 目录说明

```markdown
D:\WuWorkSpace\code\gitProject\vue-admin-template
├─.editorconfig
├─.env.development
├─.env.production
├─.env.staging
├─.eslintignore
├─.eslintrc.js
├─.travis.yml
├─babel.config.js
├─jest.config.js
├─jsconfig.json
├─LICENSE
├─package-lock.json
├─package.json
├─postcss.config.js
├─README-zh.md
├─vue.config.js
├─tests
|   ├─unit
|   |  ├─.eslintrc.js
|   |  ├─utils
|   |  |   ├─formatTime.spec.js
|   |  |   ├─parseTime.spec.js
|   |  |   └validate.spec.js
|   |  ├─components
|   |  |     ├─Breadcrumb.spec.js
|   |  |     ├─Hamburger.spec.js
|   |  |     └SvgIcon.spec.js
├─src
|  ├─App.vue
|  ├─main.js
|  ├─permission.js
|  ├─settings.js
|  ├─views
|  |   ├─404.vue
|  |   ├─tree
|  |   |  └index.vue
|  |   ├─table
|  |   |   └index.vue
|  |   ├─nested
|  |   |   ├─menu2
|  |   |   |   └index.vue
|  |   |   ├─menu1
|  |   |   |   ├─index.vue
|  |   |   |   ├─menu1-3
|  |   |   |   |    └index.vue
|  |   |   |   ├─menu1-2
|  |   |   |   |    ├─index.vue
|  |   |   |   |    ├─menu1-2-2
|  |   |   |   |    |     └index.vue
|  |   |   |   |    ├─menu1-2-1
|  |   |   |   |    |     └index.vue
|  |   |   |   ├─menu1-1
|  |   |   |   |    └index.vue
|  |   ├─login
|  |   |   └index.vue
|  |   ├─form
|  |   |  └index.vue
|  |   ├─dashboard
|  |   |     └index.vue
|  ├─utils
|  |   ├─auth.js
|  |   ├─get-page-title.js
|  |   ├─index.js
|  |   ├─request.js
|  |   └validate.js
|  ├─styles
|  |   ├─element-ui.scss
|  |   ├─index.scss
|  |   ├─mixin.scss
|  |   ├─sidebar.scss
|  |   ├─transition.scss
|  |   └variables.scss
|  ├─store
|  |   ├─getters.js
|  |   ├─index.js
|  |   ├─modules
|  |   |    ├─app.js
|  |   |    ├─settings.js
|  |   |    └user.js
|  ├─router
|  |   └index.js
|  ├─layout
|  |   ├─index.vue
|  |   ├─mixin
|  |   |   └ResizeHandler.js
|  |   ├─components
|  |   |     ├─AppMain.vue
|  |   |     ├─index.js
|  |   |     ├─Navbar.vue
|  |   |     ├─Sidebar
|  |   |     |    ├─FixiOSBug.js
|  |   |     |    ├─index.vue
|  |   |     |    ├─Item.vue
|  |   |     |    ├─Link.vue
|  |   |     |    ├─Logo.vue
|  |   |     |    └SidebarItem.vue
|  ├─icons
|  |   ├─index.js
|  |   ├─svgo.yml
|  |   ├─svg
|  |   |  ├─dashboard.svg
|  |   |  ├─example.svg
|  |   |  ├─eye-open.svg
|  |   |  ├─eye.svg
|  |   |  ├─form.svg
|  |   |  ├─link.svg
|  |   |  ├─nested.svg
|  |   |  ├─password.svg
|  |   |  ├─table.svg
|  |   |  ├─tree.svg
|  |   |  └user.svg
|  ├─components
|  |     ├─SvgIcon
|  |     |    └index.vue
|  |     ├─Hamburger
|  |     |     └index.vue
|  |     ├─Breadcrumb
|  |     |     └index.vue
|  ├─assets
|  |   ├─404_images
|  |   |     ├─404.png
|  |   |     └404_cloud.png
|  ├─api
|  |  ├─table.js
|  |  └user.js
├─public
|   ├─favicon.ico
|   └index.html
├─mock
|  ├─index.js
|  ├─mock-server.js
|  ├─table.js
|  └user.js
├─build                        //自行编写的node运行文件,比如preview功能
|   └index.js
```



## Demo

![demo](https://github.com/PanJiaChen/PanJiaChen.github.io/blob/master/images/demo.gif)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/PanJiaChen/vue-admin-template/blob/master/LICENSE) license.

Copyright (c) 2017-present PanJiaChen
