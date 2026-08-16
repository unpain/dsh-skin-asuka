# dsh-skin-asuka

[English](README.en.md) | 简体中文

面向 DSH Web UI 的明日香 / EVA 二号机主题皮肤。设计语言采用信号红、碳黑装甲、同步率绿、扫描线与驾驶舱 HUD。

![暗色模式预览](preview/readme.png)

## 特性

- 欢迎页显示完整明日香立绘和 UNIT-02 HUD。
- 进入对话后立绘自动退到右侧并降低透明度，避免影响阅读。
- 适配亮色、暗色、窄屏和系统“减少动态效果”设置。
- 皮肤切换时完整回收 DOM、标题、favicon 和主题色修改。
- 角色素材内嵌于客户端包，不依赖远程图片服务。

## 安装

```sh
dsh plugin --profile web add https://github.com/unpain/dsh-skin-asuka.git
```

安装后，在 `设置 > 皮肤` 中选择 `dsh-skin-asuka`。

## 开发

```sh
pnpm install
pnpm test
```

客户端预构建入口位于 `lib/client.js`，可运行以下命令从共享源码同步：

```sh
node scripts/sync-client-bundle.mjs
```

## 许可与声明

代码使用 MIT License。明日香与《新世纪福音战士》相关角色及设定归其各自权利方所有。本仓库是非官方同人主题，与相关权利方无关联。详见 [NOTICE](NOTICE)。
