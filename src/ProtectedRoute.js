import React, {useState, useEffect} from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import Auth from './Auth'

const ProtectedRoute = (props) => {
    let Cmp = props.Cmp;
    const history = useHistory();

    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            history.push('/signup')
        }
    }, [])
    return(
        <div>
            <Cmp />
        </div>
    )
}

export default ProtectedRoute;