FROM node:lts-alpine
ENV PORT=80
EXPOSE 80
COPY . /code/
WORKDIR /code/
CMD ["sh", "/code/start.sh"]