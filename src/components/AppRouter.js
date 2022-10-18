import React, { useContext } from 'react'
import {  Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    // console.log('user app router', user);
    return user ?
     (
        <Routes>
            {privateRoutes.map( ({path, Element}) => {
                return <Route key={path} path={path} element={Element}/>
            } )}
        </Routes>
     )
     :
     (
        <Routes>
            {publicRoutes.map( ({path, Element}) => {
                return <Route key={path} path={path} element={Element}/>
            } )}
        </Routes>
     )
}

export default AppRouter