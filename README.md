## Objectif

L'objectif du projet est de créer un jeu de puissance 4 connecté ou 2 joueurs peuvent se défier.

- Le premier utilisateur choisit un pseudo et obtient l'URL  à partager pour inviter les autres joueurs
- Le joueur 2 choisit aussi un pseudo et rejoint la partie
- Les 2 joueurs choisissent une partie
- Le créateur de la partie lance la partie
- Les joueurs place des pions à tour de rôle dans une grille de 7x6
- Un joueur gagne si 4 pions sont alignés verticalement / horizontalement ou en diagonal

## Technologies

- NodeJS
- TypeScript
- React
- Xstate
- Websocket
- https://www.npmjs.com/package/reconnecting-websocket
- Fastify
- https://www.npmjs.com/package/@fastify/websocket

## Etapes

- Machine à état (tester tant que possible)
- Interface
- Jeu hors ligne
- Mise en place du serveur *
- Jeu en ligne *
- Mise en ligne (déploiement)

## Etapes

yarn create vite tuto-puissance4
react
Typescript
yarn add xstate

git add .
git commit -m " freepositionY37m ok"
git remote add origin https://github.com/dgallula/tuto-puissance4
git branch -M master
git push -u origin master