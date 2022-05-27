# Web3 Image Hosting
This application is an image hosting and sharing service.

Users upload their images, and get links to share them on social networks or other platforms (bbcode forums, html pages, markdown).

This application was inspired by sites like Imgur, ImageShack, but in a decentralized version.

## How the application works

Images are stored on the [IPFS/Filecoin network](https://ipfs.io), a distributed, peer-to-peer system that does not depend on a centralized server.

The application uses [Web.Storage](https://web3.storage) API to store files on IPFS/Filecoin.

Others frameworks used on this development are :
* [React](https://reactjs.org/) : JavaScript library developed by Facebook which facilitates the creation of single-page web applications 
* [Bootstrap](https://getbootstrap.com/) :  CSS framework for responsive front-end development.

## Build

Install dependencies :
```
npm install
```

Create production build :
```
npm run build
```

Start development server :
```
npm start
```
