# todo-mobile-web v0.2.6

> 本项目是基于`vue-cli`搭建的待办应用，在满足个人使用需求的情况下探索新技术的使用。

## TODOs as of V1.0

- 添加 eruda 调试控制
- 多环境打包
- 样式适配方案探索 针对移动设备引入 vw 布局
- 针对 desktop 设备适配其他布局
- 首页菜单待办显示模式持久化到数据库
- 任务实现允许延期
- js/scss 参数互调
- 抽取公共方法加载上下文
- 自定义异常类，抛出异常
- 异步 await/async 异常处理
- 任务新增类型字段，类型字段可指定颜色 颜色可从调色盘选择
- 首页日期不能选择其他月份日期 在首页标题栏上增加年月选择按钮
- axios
- TAB 切换页面滚动消失
- 新建任务日期选择框遮盖`BUG`
- 每次打开`app`检查之前任务完成状况，并做标记
- 监听手机`back`按键，编写合适逻辑
- 简单的任务折线图
- 新增日志系统，记录操作以及错误

## TODOs as of feature

- 实现子任务系统
- 允许自定义主题色
- 国际化
- 研究单例模式在项目中的应用
- 用户注册登录模块
- 添加单元测试模块
- 新增收集箱收集为指定日期待办
- 新增保护模式，需要验证身份后开启 app
- 导出数据加密
- 新增模板任务
- 新增定时任务
- 多端数据同步

## 目录

- 项目简介
- 日志系统
- 任务多设备同步

## 项目简介

## 任务多设备同步

- 任务多设备同步以本地为主，允许在长期无服务器支持下独立使用
- 多端数据对比依据：用户名/设备码/ID

## License

This content is released under the [MIT](./LICENSE) License.
