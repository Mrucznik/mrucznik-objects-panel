import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import NewProject from "./pages/NewProject";
import ManageProject from "./pages/ManageProject";
import Home from "./pages/Home";
import Help from "./pages/Help";
import AdminPanel from "./pages/AdminPanel";
import Prices from "./pages/Prices";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import TextureStudio from "./pages/TextureStudio";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";

function App() {
    return (
        <Router>
            <Header/>

            <main>
                <Switch>
                    <PrivateRoute path="/projects" component={NewProject}>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/projects" component={ManageProject}>
                    </PrivateRoute>
                    <PrivateRoute path="/texturestudio" component={TextureStudio}>
                    </PrivateRoute>
                    <PrivateRoute path="/admin" component={AdminPanel}>
                    </PrivateRoute>
                    <PrivateRoute path="/prices" component={Prices}>
                    </PrivateRoute>
                    <PrivateRoute path="/help" component={Help}>
                    </PrivateRoute>
                    <PrivateRoute path="/logout" component={Logout}>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </main>

            <Footer/>
        </Router>
    );
}

export default App;
