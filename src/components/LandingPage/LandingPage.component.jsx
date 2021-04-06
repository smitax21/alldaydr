import React, {useState, useEffect, Component} from 'react';
import {NavLink, useHistory, useLocation } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';

import Auth from '../../Auth'
import Header from '../Header/Header.component';

const LandingPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [device_type, setDetail] = useState("");
    const [player_id, setId] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    const history = useHistory();
    const { state } = useLocation();
    useEffect(() => {
        if(localStorage.getItem("user-info")) {
            history.push("/")
        }
    }, [])

    let user = [];
    let device_detail = [];
    async function Login(event) {
        
        event.preventDefault();
        // Auth.authenticate(() => {
        //     setIsAuth(true)
        // })

        if (isAuth === true) {
            return <Redirect to={state?.from || '/'} />   
        }

        let item = {
            user: {email, 
                  password
            },
            role,
            device_detail: {device_type,
                  player_id}}
          console.log(item)

        let result = await fetch(" https://dev-api.alldaydr.com/api/users/sign_in.json", {
            method: 'POST',
            headers: {
                // "AUTH_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aW1lc3RhbXAiOiIyMDIxLTAzLTMxVDE3OjUyOjU5LjYxMyswMDowMCIsImVtYWlsIjoia2VsbW9qaXNwYUBiaXlhYy5jb20ifQ.HvXJgKlRsm_sfAWt8uJ7qW6sCZO6witqDoR8r_KAHbM",
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        if(localStorage.getItem("user-info") === null) {
            history.push('/signup')
        } else {
            history.push('/dashboard')
        }
        
    }


    return(
        
        <div>
            <div>
            <Header />
            </div>
            
            <form>
            <input type='text' name='email' placeholder='Email' 
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='on'
            required />
            <br />

            <input type='password' name='password' placeholder='Password'
            value={user.password} 
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='on'
            required />
            <br />

            <input type="text" name="role" placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)} />
            <br />

            <input type="text" name="device-type" placeholder="Device-Type"
            value={device_detail.device_type}
            onChange={(e) => setDetail(e.target.value)}
            required />
            <br />

            <input type="text" name="player-id" placeholder="Player-Id"
            value={device_detail.player_id}
            onChange={(e) => setId(e.target.value)} />
            <br />

            <button type='submit' onClick={Login} >
                SIGN IN
            </button>
            </form>
            

        </div>
    )
}

export default LandingPage;