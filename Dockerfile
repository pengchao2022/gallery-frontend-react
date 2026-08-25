# ==========================================
# 阶段一：构建阶段 (Build Stage)
# ==========================================
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 先复制 package.json 和 package-lock.json（利用 Docker 缓存机制加速构建）
COPY package.json ./

# 安装项目依赖
RUN npm install

# 复制项目所有源代码
COPY . .

# 执行打包命令（Vite 会将生产文件输出到 /app/dist 目录）
RUN npm run build


# ==========================================
# 阶段二：生产运行阶段 (Production Stage)
# ==========================================
FROM nginx:alpine

# 从构建阶段复制打包好的静态文件到 Nginx 的默认托管目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露 80 端口供外部访问
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]