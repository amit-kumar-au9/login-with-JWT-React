import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import UserList from './UserList'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/list" component={UserList} />
            </BrowserRouter>
        </div>
    )
}