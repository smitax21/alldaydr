import React, {useState} from 'react';

import {NavLink} from 'react-router-dom'

const Header = props => {
    const logout = () => {
        if(localStorage.getItem('user-info')) {
            localStorage.clear();
        }
    }

    return (
        <nav>
            {
                localStorage.getItem('user-info') ?
                <>
                    <NavLink exact activeClassName="active" to="/dashboard">
                        Dashboard
                    </NavLink>

                    <NavLink exact activeClassName="active" to="/product">
                        Products
                    </NavLink>

                    <NavLink exact activeClassName="active" to="/cart">
                        Cart
                    </NavLink>
                    
                    <NavLink exact activeClassName='active' to='/' onClick={logout}>
                        Logout
                    </NavLink>
                </> : <>
                    <NavLink activeClassName='on' to='/SignUp'>
                        Register
                    </NavLink>
                </>
            }
            

            
            
        </nav>
      );
}

export default Header;