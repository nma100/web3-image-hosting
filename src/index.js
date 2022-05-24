import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav className="navbar navbar-dark bg-danger shadow-sm mb-5">
      <div className="container-fluid">
        <span className="navbar-text">
          <a id="page-title" href="/" className="fs-2 text-light pe-3 text-decoration-none">Web3 Image Hosting</a>
          <span className="fs-5">Free and decentralized image sharing</span>
          </span> 
          <div>
          <a href="/" className="link-light me-3" title="Facebook"><span className="fab fa-facebook-square fa-2x"></span></a> 
          <a href="/" className="link-light me-3" title="Twitter"><span className="fab fa-twitter-square fa-2x"></span></a>
          <a href="/" className="link-light me-3" title="Telegram"><span className="fab fa-telegram fa-2x"></span></a>
          <a href="/" className="link-light" title="Discord"><span className="fab fa-discord fa-2x"></span></a>
        </div>
      </div>
    </nav>
    <App />
    <div className="position-static bottom-0 text-center mt-5 p-3">
      <div className="fs-5">Powered by :</div> 
      <a href="https://www.ipfs.io/" className="text-danger">IPFS</a> <strong className="px-2">·</strong> 
      <a href="https://filecoin.io/" className="text-danger">Filecoin</a> <strong className="px-2">·</strong>  
      <a href="https://web3.storage/" className="text-danger">Web3.Storage</a>
    </div>
  </React.StrictMode>
);

