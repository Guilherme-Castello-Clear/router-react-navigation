import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link exact to='/'>Início</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/param/Hello World'>Param #01</Link>
                </li>
                <li>
                    <Link to='/param/legal'>Param #02</Link>
                </li>
                <li>
                    <Link to='/naoexiste'>Param #02</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu