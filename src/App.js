import React from "react";
import {BrowserRouter} from "react-router-dom";
import style from "./Styles/App.module.css"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Routers from "./components/Routers";
import {Provider} from "react-redux";
import {store} from "./Store";

function App() {
    return (
        <Provider store={store}>
            <div className={style.site}>
                <BrowserRouter>
                    <div className={style.site_content}>
                        <Header />
                        <Routers />
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
