import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom";


import Home from '../../views/exemples/Home.jsx';
import About from '../../views/exemples/About.jsx';
import Param from '../../views/exemples/Param.jsx';
import NotFound from '../../views/exemples/NotFound.jsx';

const Content = props => (

    <main className='Content'>

        <Routes>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/param/:id' element={<Param/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
        
    </main>

)

export default Content