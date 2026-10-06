# Portfolio 建站 SPEC — 全站冻结模式契约

> 本文件是 27 个页面的统一构建契约。任何页面 Subagent 动手前必须完整阅读本 SPEC，
> 并对照已存在的种子页（`portfolio/index.html`、`portfolio/about.html`）与共享资产
> （`portfolio/assets/css/main.css`、`portfolio/assets/js/*.js`）执行。**凡是截图与
> 本 SPEC 冲突之处，以你的页面对应截图为最终事实**（页面文字、布局、页脚文字均以
> 截图实际内容为准），但共享组件结构（导航/页脚/reveal/卡片/动效）必须与本 SPEC 一致。

---

## 1. 站点事实

- 品牌：**XUHANGCHENG®**（设计师 徐杭成，视觉传达设计师）。
- 共 27 页：`index.html`、`about.html`、`404.html`、`work/` 下 24 个项目页。
- 设计稿截图目录（只读）：`C:\Users\Lenovo\Desktop\导出`（69 张 PNG，整页 + 分段切片）。
- 若某张截图直接 Read 报“体积超限/尺寸超限”，用降采样预览查看：
  `C:\Users\Lenovo\AppData\Local\Doubao\User Data\Default\.doubao\agent_mode\workspace\.sessions\38445687361311746\agents\o_000cW9Mt8xt\preview_tools\previews\`（同名 .jpg，最长边 1200px，由工具 Subagent 生成，如尚不存在说明管线还没跑完，先读可读切片，稍后再试）。
- Shell 环境抖动提示：若 PowerShell 命令报 `sandbox sdk failed to create shell process`，属已知间歇性故障，间隔十几秒重试（最多 5 次）；持续失败则用文件类工具（Read/Write/Edit/Glob/Grep）完成建站，并在最终报告中如实说明哪些步骤被阻塞。

## 2. 设计令牌（已写入 main.css :root）

| 令牌 | 值 | 用途 |
|---|---|---|
| --bg | #fff | 页面背景 |
| --ink | #000 | 主文字/强调 |
| --text | #333 | 正文 |
| --line | #eee | 分割线 |
| --muted | #999 | 辅助文字（浅灰） |
| --font-sans | Inter / Noto Sans SC / PingFang SC / Microsoft YaHei 栈 | 无衬线正文 |
| --font-mono | SF Mono / Cascadia Mono / Consolas 栈 | 辅助标签/编号/日期 |

- 标题一律 `font-weight:700`；辅助文字用小号 mono + letter-spacing。
- **禁止**任何外链字体/CDN（无 `fonts.googleapis.com`、无 jsDelivr、无任何 `https://` 资源引用）。

## 3. 共享组件（必须逐字复用种子页写法）

### 3.1 导航（每页完全相同，仅链接相对路径变化）
```html
<header class="site-nav">
  <div class="nav-inner">
    <a class="nav-brand" href="index.html">XUHANGCHENG®</a>
    <nav class="nav-links">
      <a href="index.html#work">WORK</a>
      <a href="about.html">ABOUT</a>
    </nav>
    <button class="nav-toggle" aria-label="menu"><span></span><span></span><span></span></button>
  </div>
</header>
```
- 固定顶部 64px；左品牌右 WORK/ABOUT；hover 变浅灰（CSS 已实现）。
- 首页自身 WORK 用 `#work`；其余页一律 `index.html#work`。
- 汉堡菜单 `nav.js` 已处理（<800px 显示）。

### 3.2 页脚（80px 三栏，文字以各页截图为准）
标准变体（about 页/项目页多用）：
```html
<footer class="site-footer">
  <div class="footer-inner">
    <span>© 2026 XU HANGCHENG</span>
    <span>VISUAL COMMUNICATION DESIGN</span>
    <a href="index.html">BACK TO HOME ↑</a>
  </div>
</footer>
```
- 首页变体：中栏 `HANGZHOU, CHINA`，右栏 `BACK TO TOP ↑`（href=`#top`）。
- **以你页面截图显示的页脚文字为准**；截图看不到页脚时用标准变体。
- 右栏可点击链接；页脚无其他内容。

### 3.3 区块元信息行
```html
<div class="sec-meta"><span>(01) GRAPHIC DESIGN</span><span>2023-2026</span></div>
```
- 或左侧 mono 标签 + 右侧内容的两栏布局（参考 about.html 的 `(PROFILE)` 写法）。

### 3.4 滚动入场
- 每个主要区块加 `class="reveal"`；`scroll-reveal.js` 在进入视口 14% 阈值时淡入 + 上移 20px，仅一次。**不要自己另写滚动动画**。

### 3.5 项目卡片
```html
<a class="work-card reveal" href="work/project-X.html">
  <img class="card-media" src="../assets/images/xxx.png" alt="...">
  <span class="view-tag">VIEW PROJECT ↗</span>
  <div class="card-caption"><span class="mono-label">01</span><span>标题</span><span class="mono-label">EN<br>YYYY-YYYY</span></div>
</a>
```
- hover 放大 1.02 + 右上角 VIEW PROJECT ↗（CSS 已实现）；整卡可点击。

### 3.6 NEXT PROJECT 通栏（黑色，跳下一个项目页）
```html
<a class="next-project" href="work/project-X.html">
  <span class="np-label">NEXT PROJECT</span>
  <span class="np-title">空间设计 <em>SPACE DESIGN</em></span>
</a>
```
- **标题文字必须与你截图中的 NEXT PROJECT 区块一致**；href 指向“下一个项目”的封面页。
- 项目顺序链：project-1 → project-2 → project-3 → project-4 → project-5 → project-6；
  project-6 的 NEXT 区块若截图显示的是返回首页/作品集，则 href=`index.html`，否则按截图（报告时注明）。

### 3.7 联系方式按钮
- 凡页面出现 “Let's talk” / “call me” 类按钮：`<a class="cta-mailto" href="mailto:2589874113@qq.com">…</a>`。

### 3.8 3D 倾斜卡（仅首页 hero 照片卡）
```html
<figure class="tilt-card reveal" data-tilt>
  <div class="tilt-highlight"></div>
  <img class="card-media" src="assets/images/xxx.png" alt="">
</figure>
```
- 参数已写死在 `hero-3d.js`（rotateX ±9°、rotateY ±12°、缓动 0.09、高光跟随、移出回正；
  `[data-hero]` 区块滚动到视口 8% 淡出）。其他页面一般不需要，别滥用。

## 4. 全局 JS（每页 body 末尾按序引入）
```html
<script src="assets/js/nav.js"></script>        <!-- work/ 下为 ../assets/js/nav.js -->
<script src="assets/js/cursor.js"></script>
<script src="assets/js/scroll-reveal.js"></script>
<script src="assets/js/hero-3d.js"></script>
```
- 不用 `type="module"`，纯脚本，file:// 下可运行；不 fetch 本地文件。

## 5. 页面清单与截图映射（你的切片范围见你的任务描述）

| 截图编号 | 页面 | 说明 |
|---|---|---|
| 01_首页 | index.html | 种子页已完成 |
| 02_关于页 | about.html | 种子页已完成 |
| 27_404页 | 404.html | 无页脚；居中 404 / 页面暂时不存在 / 返回首页 → |
| 03_主项目1_封面页 | work/project-1.html | 编号 01-07 分节长页 |
| 04~10_主项目1_子页1~7 | work/project-1-sub-1~7.html | 各子页详页 |
| 11_主项目2_封面页 | work/project-2.html | 空间设计 SPACE DESIGN |
| 12/13_主项目2_子页1/2 | work/project-2-sub-1/2.html | |
| 14_主项目3_封面页 | work/project-3.html | 品牌视觉系统 BRAND DESIGN（崤间闲茶） |
| 15/16_主项目3_子页1/2 | work/project-3-sub-1/2.html | |
| 17_主项目4_封面页 | work/project-4.html | 校园IP设计 IP DESIGN（鹅小财） |
| 18/19_主项目4_子页1/2 | work/project-4-sub-1/2.html | |
| 20_主项目5_封面页 | work/project-5.html | 交互产品设计 INTERACTION DESIGN（艺术学院官网） |
| 21_主项目5_子页1 | work/project-5-sub-1.html | |
| 22_主项目6_封面页 | work/project-6.html | 实践与创赛项目 PRACTICAL PROJECT（乡村振兴大赛） |
| 23~26_主项目6_子页1~4 | work/project-6-sub-1~4.html | |

> 项目标题（上表右列推断值）**必须以你项目封面截图为准**，如与推断不符以截图为准并在报告中注明。
> 09_主项目1_子页6.png 文件存在（整页截图，无切片），可能体积超限，用预览管线查看。

## 6. 图片素材裁切约定（验收硬项）

- **截图内出现的栅格图（项目照片/作品图/海报/界面模拟图）必须裁切为 assets/images/ 下的本地 PNG**，用相对路径引用。禁止留空、禁止用 CSS 占位、禁止外链。
- 命名：`assets/images/p{项目号}-{页面}-{序号}.png`
  - 封面页：`p1-cover-1.png`、`p1-cover-2.png`…
  - 子页：`p1-sub1-1.png`、`p1-sub1-2.png`…（sub2/sub3… 同理）
  - 项目2 用 `p2-cover-1.png`、`p2-sub1-1.png`…；依此类推（不用中文名）。
- **复用规则**：裁切前先 Glob `portfolio/assets/images/` 看是否已有同视觉区域的图片；同一视觉（如同一本书照片出现在封面和子页）**复用同一文件**，不要重复裁切。
- **MANIFEST 登记（无论能否执行裁切都必须做）**：每识别出一个待裁区域，就向 `portfolio/assets/images/MANIFEST-p{项目号}.txt` 追加一行：
  `目标文件名 | 来源截图文件名 | 内容描述 | 裁切框像素(x1,y1,x2,y2) | status`
  - 裁切框像素换算：Read 返回的 OCR 坐标是千分比（左上原点）；来源图宽恒为 1440，高为该截图实际高度（Read 的 meta `size: 1440xH`）。像素框 = (x1/1000×1440, y1/1000×H, x2/1000×1440, y2/1000×H)，可微调 2-3px 让框紧贴内容。
  - 若当前 shell 不可用（`sandbox sdk failed to create shell process`）：**先登记 MANIFEST 并把 status 写 PENDING**，页面 HTML 仍按预留文件名引用该图；shell 恢复后的批量裁切会执行 PENDING 项。
  - 若你实际完成了裁切：status 写 DONE，并把裁出的 PNG 放进 assets/images/。
- 裁切方法（shell 可用时）：Python PIL（`Image.open(...).crop(box).save(...)`）；整图比例即截图所见比例，不缩放、保持原始像素。
- 裁切完成后核对：页面 `<img>` 引用的每个文件名都必须在 MANIFEST 中有对应行（DONE 或 PENDING）。

## 7. 硬性约束（逐条自查）

1. 纯原生 HTML/CSS/JS；无框架、无构建、无 CDN、无外链字体；图片一律本地相对路径。
2. 页面文字**必须**与截图 OCR/视觉一致；不添加设计稿没有的内容；不删除设计稿有的内容。
3. 动效参数由共享 JS/CSS 保证：拖尾 30px/200ms/0.8、3D ±9°/12° 缓动 0.09、入场 14% 阈值上移 20px 仅一次、卡片 hover 1.02 + VIEW PROJECT ↗、<800px 汉堡、1280/800 断点。**不得在页面内覆盖这些参数**。
4. 响应式：>1280 还原设计稿；800-1280 多栏变 2 列、边距 24px；<800 单列。用 `.grid-2/.grid-3/.grid-4` 及 main.css 的断点规则，勿另写互相冲突的断点。
5. 中文正文用 `lang="zh-CN"`；`<title>` 用 `徐杭成 · XU HANGCHENG — <页面名>` 风格。
6. 不用 emoji；图标用手写内联 SVG（如 ↗ 箭头）。
7. 内部链接与图片引用必须全部可解析（相对路径正确：work/ 页图片和 CSS/JS 都要 `../`）。
8. 移动端点击目标 ≥ 44px。

## 8. 交付与自查（每页完成后必须执行并随报告返回）

1. 列出你产出的全部 HTML 绝对路径。
2. 列出你裁切的全部图片绝对路径 + MANIFEST 路径。
3. 自查清单逐项打勾（文字 1:1、无外链、链接可解析、动效参数未覆盖、断点未冲突）。
4. 报告你页面中 NEXT PROJECT 区块的文字与 href 目标（用于我核对链）。
5. 报告你页面截图里确认的项目标题/EN/年份（用于我核对项目映射）。
6. 若某张截图无法查看（体积/尺寸超限且预览管线未生成），如实列出，不得编造内容。
