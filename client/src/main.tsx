import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/globals.css";
import {AuthProvider} from "./context/authcontext";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>

        <AuthProvider>

            <BrowserRouter>

                <App />

            </BrowserRouter>

        </AuthProvider>

    </React.StrictMode>
);

import { Toaster } from "react-hot-toast";

<BrowserRouter>
    <App />
    <Toaster
        position="top-right"
        toastOptions={{
            duration: 2500,
            style: {
                borderRadius: "16px",
                padding: "14px",
            },
        }}
    />
</BrowserRouter>