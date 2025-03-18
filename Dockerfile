# ใช้ Node.js เพื่อติดตั้งและ Build React
FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# ตรวจสอบว่าไฟล์ถูกสร้างจริง
RUN ls -la /app/dist

# ใช้ Nginx เพื่อเสิร์ฟไฟล์ Static
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
CMD ["nginx", "-g", "daemon off;"]  