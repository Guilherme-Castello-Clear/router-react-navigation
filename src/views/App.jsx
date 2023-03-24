import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import './App.css'



const App = props => (
    <div className='App'>
        <BrowserRouter>
            <Menu/>
            <Content></Content>
        </BrowserRouter>

    </div>
)

export default App