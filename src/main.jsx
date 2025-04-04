import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import {ToastContainer} from "react-toastify";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <WalletProvider>
                <App />
                <ToastContainer />
            </WalletProvider>
        </Router>
    </React.StrictMode>
);
