# encode-vue-mobile-template

印客学院 Vue 移动端项目模板

## 技术栈

- Vue3
- Vite4
- Pinia2
- Vitest
- TypeScript
- Vant4 （按需使用）
- pnpm

## 目录结构

```md
├── .husky
│   └── commit-msg           # commit 信息校验
|   └── pre-commit           # eslint 代码检验
├── src
│   ├── api                  # Api ajax 等
│   ├── assets               # 本地静态资源
│   ├── layouts              # 封装布局组件
│   ├── components           # 业务通用组件和基础布局组件
│   ├── router               # Vue-Router
│   ├── store                # Pinia
│   ├── utils                # 工具库
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.ts              # Vue 入口 JS
│   └── app.less             # 全局样式
│   └── env.d.ts             # 全局公用 TypeScript 类型
├── build/mock               # mock 服务
├── mock                     # mock 数据
├── public                   # 静态文件
├── scripts                  # 公共执行脚本
├── tests                    # 单元测试
├── auto-imports.d.ts        # Vue3 组合式API 类型声明文件
├── components.d.ts          # 组件自注册类型声明文件
├── vite.config.ts           # Vite 配置文件
├── tsconfig.json            # TS 配置文件
├── index.html               # 浏览器渲染入口
├── Guide.md                 # 使用指南
├── README.md                # 简单介绍
└── package.json             # 项目的依赖
```
