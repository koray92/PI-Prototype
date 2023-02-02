

import React from 'react';
import { Routes,Route,Link,NavLink } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Termofus";
import Legaldisclosure from "./Legaldisclosure";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Termsofuse" element={<Contact />} />
                <Route path="/Legaldisclosure" element={<Legaldisclosure />} />
            </Routes>
        </>
    );
};

export default App;
