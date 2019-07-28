FROM node:lts-alpine
ENV PORT=80
EXPOSE 80
COPY . .
CMD ["sh", "start.sh"]