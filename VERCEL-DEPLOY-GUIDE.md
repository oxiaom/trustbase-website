# Vercel 部署配置指南

> **时间：** 2026-05-03 01:24
> **状态：** 正在 Vercel 创建项目

---

## 一、当前步骤确认

### ✅ 你已经完成
```
1. New Project（新建项目）
2. Cloning from GitHub（从 GitHub 克隆）
3. 选择仓库：oxiaom/trustbase-website
4. 选择分支：main
```

---

## 二、下一步配置

### 步骤 1：项目配置

**在 Vercel 页面上配置**：

```
Project Name: trustbase-website
Framework Preset: Next.js（自动检测）
Root Directory: ./（默认）

Build Command: npm run build（自动）
Output Directory: .next（自动）
Install Command: npm install（自动）
```

**保持默认即可，Vercel 会自动检测 Next.js！**

---

### 步骤 2：点击 Deploy

```
点击页面底部的 "Deploy" 按钮
Vercel 开始自动部署
```

---

## 三、部署过程

### Vercel 自动执行

```
1. 拉取 GitHub 代码
2. 安装依赖（npm install）
3. 构建项目（npm run build）
4. 部署到 Vercel CDN
5. 生成预览链接
```

### 预计时间

```
首次部署：约 1-2 分钟
后续部署：约 30-60 秒
```

---

## 四、部署成功后

### 步骤 1：查看部署结果

```
部署成功后，Vercel 会显示：
├─ 预览链接：https://trustbase-website-xxx.vercel.app
├─ 部署日志
└─ 构建信息
```

### 步骤 2：绑定自定义域名

```
1. 点击 "Settings"
2. 点击 "Domains"
3. 输入域名：trustbase.team
4. 点击 "Add"
```

### 步骤 3：配置 DNS

**Vercel 会提供 DNS 配置信息**：
```
CNAME trustbase.team -> cname.vercel-dns.com
```

**在域名注册商处配置**：
```
Type: CNAME
Host: @
Value: cname.vercel-dns.com
TTL: Automatic
```

---

## 五、DNS 配置详细步骤

### 在域名注册商后台

```
步骤：
├─ 1. 登录域名注册商（Namecheap / Google Domains）
├─ 2. 找到域名管理页面
├─ 3. 找到 DNS 管理 / Advanced DNS
├─ 4. 添加 CNAME 记录：
│  ├─ Type: CNAME
│  ├─ Host: @（或 www）
│  ├─ Value: cname.vercel-dns.com
│  └─ TTL: Automatic
│
└─ 5. 保存配置
```

### DNS 解析等待

```
DNS 解析时间：
├─ 通常：几分钟到几小时
├─ 最长：24-48 小时
└─ 可以用在线工具检查：
   ├─ https://dnschecker.org
   └─ https://whatsmydns.net
```

---

## 六、自动部署机制

### 以后每次更新

```
工作流程：
├─ 1. 本地修改代码
├─ 2. git add .
├─ 3. git commit -m "Update"
├─ 4. git push
└─ 5. Vercel 自动部署

无需手动操作！
```

### PR 预览

```
每个 PR 自动生成预览链接：
https://trustbase-website-xxx.vercel.app

可以在预览链接中测试变更
```

---

## 七、部署成功后的访问地址

### Vercel 预览链接
```
https://trustbase-website.vercel.app
或
https://trustbase-website-xxx.vercel.app
```

### 自定义域名（DNS 配置后）
```
https://trustbase.team
```

---

## 八、总结

### ✅ 已完成
```
✅ GitHub 仓库创建
✅ 代码推送成功
✅ Vercel 项目创建中
```

### ⏳ 正在进行
```
⏳ Vercel 自动部署
⏳ 等待部署完成
```

### 📋 部署完成后
```
├─ 查看预览链接
├─ 绑定域名
├─ 配置 DNS
└─ 等待 DNS 解析
```

---

## 九、立即操作

### 现在在 Vercel 页面上

**确认配置**：
```
├─ Project Name: trustbase-website
├─ Framework: Next.js
└─ Root Directory: ./
```

**点击 Deploy 按钮！**

---

*时间: 2026-05-03 01:24*