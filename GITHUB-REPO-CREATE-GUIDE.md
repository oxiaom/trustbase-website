# GitHub 仓库创建指南

> **时间：** 2026-05-03 00:52
> **目标：** 创建 trustbase-website 仓库并推送代码

---

## 一、GitHub 网站创建仓库步骤

### 步骤 1：登录 GitHub
```
访问：https://github.com
登录你的账号
```

### 步骤 2：创建新仓库
```
1. 点击右上角的 "+" 号
2. 选择 "New repository"
```

### 步骤 3：填写仓库信息
```
Repository name: trustbase-website
Description: TrustBase Team 官网 - 构建去中心化信任基础设施
Visibility: ✅ Public（公开）

⚠️ 重要：
├─ 不要勾选 "Add a README file"
├─ 不要勾选 "Add .gitignore"
└─ 不要勾选 "Choose a license"

原因：我们已经有了这些文件，勾选会导致冲突
```

### 步骤 4：创建仓库
```
点击 "Create repository" 按钮
```

---

## 二、创建仓库后的操作

### 仓库创建成功后，GitHub 会显示一个页面

**页面内容类似**：
```
…or push an existing repository from the command line

git remote add origin https://github.com/你的用户名/trustbase-website.git
git branch -M main
git push -u origin main
```

**复制这些命令**，然后告诉我，我帮你执行！

---

## 三、我需要的信息

**创建仓库后，请告诉我**：
1. ✅ 仓库已创建
2. ✅ 仓库的 URL（例如：https://github.com/oxiaom/trustbase-website）

然后我会立即执行推送命令！

---

## 四、推送命令（我会执行）

```bash
cd D:\myopenclaw\projects\trustbase-website

# 关联远程仓库
git remote add origin https://github.com/你的用户名/trustbase-website.git

# 重命名分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

---

## 五、推送成功后

### 自动触发 Vercel 部署
```
推送成功后：
├─ Vercel 自动检测到新仓库
├─ 自动开始部署
└─ 约 1-2 分钟后部署完成
```

### 访问网站
```
Vercel 会提供一个临时域名：
https://trustbase-website-xxx.vercel.app

然后绑定自定义域名：
https://trustbase.team
```

---

## 六、总结

### 你需要做的
```
1. 登录 GitHub
2. 创建新仓库：trustbase-website
3. 告诉我仓库 URL
```

### 我会做的
```
1. 关联远程仓库
2. 推送代码
3. 确认部署成功
```

---

**请在 GitHub 创建仓库，然后告诉我仓库 URL！** 💕
