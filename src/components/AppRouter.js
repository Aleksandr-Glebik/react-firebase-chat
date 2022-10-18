import React from 'react'
import {  Routes, Route} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
    const user = false
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