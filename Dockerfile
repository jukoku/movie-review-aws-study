FROM node:18.15.0
WORKDIR /app
ENV PORT=3000
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]