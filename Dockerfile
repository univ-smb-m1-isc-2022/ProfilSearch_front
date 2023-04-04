# Utilise l'image de base Node.js 14
FROM node:14 as node

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de votre application dans le conteneur
COPY . .

# Installe les dépendances de l'application
RUN npm install

# Construit l'application
RUN npm run build --prod

FROM nginx:alpine

# Copie les fichiers construits de l'application dans Nginx
COPY --from=node /app/dist/profilsearch /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Démarre Nginx pour servir l'application
CMD ["nginx", "-g", "daemon off;"]

# launch command 
# docker build -t profilsearch .
# docker run -d -p 4200:4200 profilsearch
# docker run -d -p 4200:4200 --name profilsearch profilsearch

