//On va souscrire au serveur socketio sur notre serveur
//En souscrivant, on écoute tous les signaux que nous envoie socketio
//Donc dès qu'il émet un signal avec un message, je suis capable de récupérer ce message pour en faire ce que je veux
//Je vais pouvoir émettre moi meme un signal vers le serveur pour qu'il le retransmette à toutes les autres applications connectées à ce serveur.

import {io} from "socket.io-client"

export const socket=io("http://localhost:3001")