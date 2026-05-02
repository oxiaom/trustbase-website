# TrustBase Website

TrustBase Team 官网 - 构建去中心化信任基础设施

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 📚 项目结构

```
trustbase-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 全局布局
│   │   ├── page.tsx      # 首页
│   │   ├── docs/         # 文档页面
│   │   ├── team/         # 团队页面
│   │   ├── community/    # 社区页面
│   │   └── blog/         # 博客页面
│   ├── components/       # React 组件
│   └── styles/           # 样式文件
├── public/               # 静态资源
└── package.json
```

## 🛠️ 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 🌐 部署

### Vercel 自动部署

每次 push 到 main 分支，Vercel 自动部署。

### 手动部署

```bash
npm i -g vercel
vercel
```

## 📖 文档

- [API 文档](./docs/api.md)
- [SDK 文档](./docs/sdk.md)
- [开发指南](./docs/guide.md)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](./CONTRIBUTING.md)

## 📄 许可证

MIT License

## 🔗 链接

- [官网](https://trustbase.team)
- [GitHub](https://github.com/oxiaom/trustcoin-ecommerce)
- [Discord](https://discord.gg/trustbase)

---

© 2026 TrustBase Team. All rights reserved.
