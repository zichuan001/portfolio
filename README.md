# XUHANGCHENG® 个人作品集 · 部署说明

> 站点：**XUHANGCHENG® Portfolio**（徐杭成，视觉传达设计师）
> 形态：纯静态个人作品集站点，纯原生 HTML / CSS / JavaScript 实现。

---

## 一、项目简介

本仓库为视觉传达设计师 **徐杭成（XUHANGCHENG®）** 的个人作品集网站，用于展示个人介绍与 6 组设计项目案例。整站共 **27 个页面**，全部由原生 HTML/CSS/JS 手写完成，不依赖任何前端框架、构建工具、外部 CDN 或外链字体。

所有设计稿截图均来自 Figma，站点为 **1:1 还原设计稿**；页面中出现的栅格图、项目展示图均由设计稿截图裁切后作为本地图片存放。由于全部资源走相对路径引用，站点既可在本地直接双击打开预览，也可一键托管到任意静态站点服务。

---

## 二、页面清单（27 页 · 与设计稿编号对应）

| 编号 | 设计稿名 | 文件路径 |
|---:|---|---|
| 01 | 首页 | `index.html` |
| 02 | 关于页 | `about.html` |
| 03 | 主项目 1 · 封面页 | `work/project-1.html` |
| 04 | 项目 1 · 子页 1 | `work/project-1-sub-1.html` |
| 05 | 项目 1 · 子页 2 | `work/project-1-sub-2.html` |
| 06 | 项目 1 · 子页 3 | `work/project-1-sub-3.html` |
| 07 | 项目 1 · 子页 4 | `work/project-1-sub-4.html` |
| 08 | 项目 1 · 子页 5 | `work/project-1-sub-5.html` |
| 09 | 项目 1 · 子页 6 | `work/project-1-sub-6.html` |
| 10 | 项目 1 · 子页 7 | `work/project-1-sub-7.html` |
| 11 | 主项目 2 · 封面页 | `work/project-2.html` |
| 12 | 项目 2 · 子页 1 | `work/project-2-sub-1.html` |
| 13 | 项目 2 · 子页 2 | `work/project-2-sub-2.html` |
| 14 | 主项目 3 · 封面页 | `work/project-3.html` |
| 15 | 项目 3 · 子页 1 | `work/project-3-sub-1.html` |
| 16 | 项目 3 · 子页 2 | `work/project-3-sub-2.html` |
| 17 | 主项目 4 · 封面页 | `work/project-4.html` |
| 18 | 项目 4 · 子页 1 | `work/project-4-sub-1.html` |
| 19 | 项目 4 · 子页 2 | `work/project-4-sub-2.html` |
| 20 | 主项目 5 · 封面页 | `work/project-5.html` |
| 21 | 项目 5 · 子页 1 | `work/project-5-sub-1.html` |
| 22 | 主项目 6 · 封面页 | `work/project-6.html` |
| 23 | 项目 6 · 子页 1 | `work/project-6-sub-1.html` |
| 24 | 项目 6 · 子页 2 | `work/project-6-sub-2.html` |
| 25 | 项目 6 · 子页 3 | `work/project-6-sub-3.html` |
| 26 | 项目 6 · 子页 4 | `work/project-6-sub-4.html` |
| 27 | 404 页 | `404.html` |

> 其中 `work/` 目录下共 24 个项目详情页（6 个项目封面页 + 18 个子页）。

---

## 三、目录结构

```
portfolio/
├── index.html                  # 01 首页
├── about.html                  # 02 关于页
├── 404.html                    # 27 404 页
├── work/                       # 24 个项目详情页
│   ├── project-1.html
│   ├── project-1-sub-1.html
│   ├── project-1-sub-2.html
│   ├── project-1-sub-3.html
│   ├── project-1-sub-4.html
│   ├── project-1-sub-5.html
│   ├── project-1-sub-6.html
│   ├── project-1-sub-7.html
│   ├── project-2.html
│   ├── project-2-sub-1.html
│   ├── project-2-sub-2.html
│   ├── project-3.html
│   ├── project-3-sub-1.html
│   ├── project-3-sub-2.html
│   ├── project-4.html
│   ├── project-4-sub-1.html
│   ├── project-4-sub-2.html
│   ├── project-5.html
│   ├── project-5-sub-1.html
│   ├── project-6.html
│   ├── project-6-sub-1.html
│   ├── project-6-sub-2.html
│   ├── project-6-sub-3.html
│   └── project-6-sub-4.html
└── assets/
    ├── css/
    │   └── main.css            # 全站样式
    ├── js/
    │   ├── cursor.js           # 全局鼠标拖尾 / 点击波纹
    │   ├── scroll-reveal.js    # 滚动入场动画
    │   ├── hero-3d.js          # 首页 Hero 3D 卡片倾斜
    │   └── nav.js              # 固定导航 / 汉堡菜单
    └── images/                 # 项目截图、栅格图等本地图片
```

---

## 四、功能特性

### 交互与动效

- **全局鼠标拖尾与点击波纹**：跟随鼠标的拖尾粒子（约 30px 节点、约 200ms 过渡），点击处扩散波纹；**触屏设备自动隐藏**，避免在手机上产生无意义渲染。
- **首页 Hero 3D 卡片倾斜**：鼠标移动时 Hero 卡片做 3D 透视倾斜，旋转幅度约 **±9°**，透视深度约 **12°**，鼠标离开后回弹复位。
- **滚动入场动画**：区块进入视口约 **14%** 阈值时触发淡入/上移动画，基于 `IntersectionObserver` 实现。
- **固定导航 + 汉堡菜单**：顶部导航常驻；视口宽度 **< 800px** 时折叠为汉堡按钮展开。
- **项目卡片交互**：hover 时卡片轻微放大，并显示 `VIEW PROJECT ↗` 入口。
- **联系按钮**：页内 mailto 联系按钮，唤起本地邮件客户端。
- **NEXT PROJECT 通栏跳转**：项目详情页底部通栏按钮，一键跳到下一个项目。

### 响应式断点

- **1280px**：桌面端布局上限 / 宽屏适配。
- **800px**：平板 / 手机切换点，导航折叠为汉堡菜单。

---

## 五、本地预览

本项目为纯静态站点，**无需启动任何本地服务器**：

1. 进入 `portfolio/` 目录；
2. 双击 `index.html`，即可在默认浏览器中通过 `file://` 协议完整预览全站；
3. 所有图片、CSS、JS 均为相对路径引用，本地打开与线上访问行为一致。

> 推荐使用 Chrome / Edge / Firefox 等现代浏览器最新版本预览，以获得完整的动效与 3D 倾斜效果。

---

## 六、GitHub Pages 部署步骤

本站为纯静态站点，最直接的托管方式是 **GitHub Pages**，按以下步骤操作即可：

### 1. 新建仓库

在 GitHub 上新建一个仓库，**Visibility 选择 Public**（Pages 免费版要求 Public 仓库）。

### 2. 上传站点文件

将 `portfolio/` 目录下的**全部内容**上传到仓库**根目录**，包括：

- `index.html`
- `about.html`
- `404.html`
- `work/`（整个目录）
- `assets/`（整个目录）

> ⚠️ 注意：是把 `portfolio/` **里面的内容**放到仓库根目录，而不是把 `portfolio/` 这个文件夹整体塞进去。否则 `index.html` 会落在 `portfolio/index.html`，Pages 默认入口找不到。

### 3. 开启 Pages

进入仓库 **Settings → Pages**：

- **Source** 选择 `Deploy from a branch`；
- **Branch** 选择 `main`；
- **目录 / Folder** 选择 `/ (root)`；
- 点击 **Save**。

### 4. 等待生效

保存后等待 **1–2 分钟**，GitHub 完成首次构建。页面刷新后，GitHub 会在同一位置给出访问地址：

```
https://<你的用户名>.github.io/<仓库名>/
```

### 5. 路径自动生效

由于全站所有资源（图片、CSS、JS、页面间跳转）均使用**相对路径**，部署到 Pages 根目录后**无需任何额外配置**，所有链接、图片、动效脚本自动正常加载。

> **提示**：如果以后把站点放到子目录（例如仓库内 `docs/` 目录），需要相应调整相对路径基准；本仓库按**根目录部署**即可，无需改动任何代码。

---

## 七、技术说明

- **纯原生实现**：HTML + CSS + 原生 JavaScript（ES6），无 React / Vue / 任何前端框架。
- **无构建工具**：不使用 Webpack / Vite / Sass / TypeScript 等，源码即产物。
- **无外部依赖**：不引用任何 CDN、第三方 JS 库或外链字体。
- **字体栈**：使用系统字体栈（system font stack），不加载网络字体，首屏渲染无 FOIT/FOUT。
- **资源引用**：全部图片、样式、脚本均走相对路径，图片统一存放于 `assets/images/`。
- **浏览器兼容**：建议使用支持 `IntersectionObserver`、CSS 3D Transform 与 ES6 的现代浏览器（Chrome / Edge / Firefox / Safari 近两年版本）。
