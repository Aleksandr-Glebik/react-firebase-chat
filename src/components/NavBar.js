import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

const NavBar = () => {
    const user = false

    return (
        <AppBar position="static" color={'primary'} textColor={'white'}>
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    { user
                        ? <Button variant={'outlined'} color="inherit">Выйти</Button>
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