# vue-element-axios

## 项目命令

```安装
yarn install
```

### 本地编译并热重启

```command
yarn serve
```

### 编译并打包

```command
yarn build
```

### 检查和修正文件内容

```command
yarn lint
```

### 自定义配置

查看 [Configuration Reference](https://cli.vuejs.org/config/).

## 文件结构

### config

配置项

- path.js
  请求服务器的正式和测试环境路径配置
- server.js
  后台接口路径配置
- post.js
  axios 请求封装文件
- dev.env.js prod.env.js
  配置打包环境

### utils

组件配置

- element-ui.js
  element 组件按需加载
- utils.js
  自定义功能

### 访问本地项目文件

本地文件夹启动项目后访问

- 全局安装 serve

```command
yarn global add serve
```

- 进入项目文件夹，通过 serve 启动
  允许跨域访问，启动时增加 --cors

```command
serve --cors
```
