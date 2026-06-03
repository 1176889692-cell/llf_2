# FoodTI 部署指南

## 快速部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名填写：`foodti-test`
3. 选择 **Public**
4. 点击 **Create repository**

### 第二步：推送代码

在终端执行以下命令（替换 `你的用户名`）：

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/foodti-test.git

# 推送代码
git branch -M main
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. 进入仓库页面，点击 **Settings**
2. 左侧菜单找到 **Pages**
3. **Source** 选择 `Deploy from a branch`
4. **Branch** 选择 `main` 和 `/ (root)`
5. 点击 **Save**

### 第四步：访问你的网站

等待 1-2 分钟后，访问：
```
https://你的用户名.github.io/foodti-test/
```

---

## 其他部署方式

### Vercel（推荐，速度快）

1. 访问 https://vercel.com
2. 点击 **New Project**
3. 导入 GitHub 仓库
4. 点击 **Deploy**
5. 获得链接：`foodti-test.vercel.app`

### Netlify

1. 访问 https://netlify.com
2. 选择 **Add new site** > **Import an existing project**
3. 连接 GitHub 仓库
4. 点击 **Deploy**

---

## 部署后分享

部署成功后，你可以通过以下方式分享：

1. **直接分享链接** - 发送给朋友
2. **生成二维码** - 使用在线工具生成
3. **社交媒体** - 分享到微信/微博

---

## 常见问题

**Q: 部署后页面空白？**
A: 检查仓库是否为 Public，Pages 是否启用

**Q: 样式没有加载？**
A: 等待几分钟，GitHub Pages 需要时间部署

**Q: 如何更新？**
A: 修改代码后执行 `git add . && git commit -m "update" && git push`
