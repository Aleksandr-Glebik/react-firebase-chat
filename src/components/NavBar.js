import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const NavBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static" color={'primary'}>
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    { user
                        ? <Button variant={'outlined'}
                                  color="inherit"
                                  onClick={() => auth.signOut()}
                          >Выйти</Button>
                        : <Link to={LOGIN_ROUTE} underline="none">
                            <Button variant={'outlined'} color="inherit">Логин</Button>
                          </Link>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar