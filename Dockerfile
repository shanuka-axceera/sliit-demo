From node:18-apline3.14

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3005

CMD ["node" ,'index.js']