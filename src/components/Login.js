import { Container, Grid, Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase/compat/app';

const Login = () => {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)

        console.log('user login', user);
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
               <Grid style={{width: 400, background: 'lightgray', borderRadius: 15}}
                     container
                     alignItems={'center'}
                     justifyContent={'center'}
               >
                    <Box p={5}>
                        <Button variant={'outlined'}
                                onClick={login}
                        >Войти с помощью GOOGLE</Button>
                    </Box>
               </Grid>
            </Grid>
        </Container>
    )
}

export default Login