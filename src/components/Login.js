import { Container, Grid, Box, Button } from '@mui/material'
import React from 'react'

const Login = () => {
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
                        <Button variant={'outlined'}>Войти с помощью GOOGLE</Button>
                    </Box>
               </Grid>
            </Grid>
        </Container>
    )
}

export default Login