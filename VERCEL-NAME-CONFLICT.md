# Vercel 项目名称冲突解决

> **时间：** 2026-05-03 01:30
> **问题：** 项目名称已被使用

---

## 一、问题原因

```
错误信息：
The specified name is already used for a different Git repository.
Please enter a new one.

原因：
├─ Vercel 中已经有一个同名项目
└─ 需要使用不同的项目名称
```

---

## 二、解决方案

### 方案 1：使用不同的项目名称

**推荐名称**：
```
trustbase-team
或
trustbase-website-2026
或
trustbase-official
```

**在 Vercel 页面上修改**：
```
Project Name: trustbase-team
（或其他你喜欢的名称）
```

### 方案 2：删除旧的 Vercel 项目

**如果旧项目不需要**：
```
1. 在 Vercel Dashboard 找到旧项目
2. 点击 Settings
3. 滚动到底部
4. 点击 "Delete Project"
5. 然后重新创建
```

---

## 三、推荐操作

### 最简单的方法

**修改项目名称**：
```
在 Vercel 页面上：
├─ Project Name: trustbase-team
├─ Framework Preset: Next.js
└─ 点击 Deploy
```

**这样不会影响域名绑定**：
```
项目名称：trustbase-team
域名：trustbase.team

项目名称和域名是独立的！
```

---

## 四、项目名称 vs 域名

### 重要说明

```
项目名称：Vercel 内部标识
├─ 用于 Vercel Dashboard 显示
├─ 用于生成默认预览链接
└─ 可以随意修改

域名：用户访问地址
├─ trustbase.team（自定义域名）
├─ 与项目名称无关
└─ 可以绑定到任何项目
```

### 示例

```
项目名称：trustbase-team
预览链接：https://trustbase-team.vercel.app
自定义域名：https://trustbase.team

用户访问：https://trustbase.team ✅
```

---

## 五、立即操作

### 在 Vercel 页面上

**修改项目名称**：
```
Project Name: trustbase-team
（或 trustbase-official）
```

**然后点击 Deploy**

---

## 六、总结

### 问题
```
❌ 项目名称 trustbase-website 已被使用
```

### 解决方案
```
✅ 修改项目名称为 trustbase-team
✅ 不影响域名绑定
✅ 用户仍然访问 trustbase.team
```

---

*时间: 2026-05-03 01:30*