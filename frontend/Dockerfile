FROM node:18.17.1-slim
# RUN npm install
# RUN npm install -g yarn
# COPY package*.json .
# RUN npm install
# RUN npm install -g create-react-app
# RUN yarn install
# RUN yarn add @emotion/react
# RUN yarn add --dev @emotion/babel-plugin
# RUN yarn add @emotion/styled
# RUN yarn add -D @craco/craco
# RUN yarn add -D @emotion/babel-preset-css-prop

# # RUN npm i @fortawesome/fontawesome-svg-core
# # RUN npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
# # RUN npm i @fortawesome/react-fontawesome
# # RUN npm install react-responsive
# COPY . .

# WORKDIR /app
COPY . .

RUN npm install -g create-react-app
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]