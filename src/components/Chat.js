import React, {useContext, useState} from 'react'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Container, Grid, TextField } from '@mui/material'


const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const [value, setValue] = useState('')
    const sendMessage = async () => {
        console.log(value)
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50, marginTop: 20}}
                // alignItems={'center'}
                justifyContent={'center'}
            >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>

                </div>
                <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '80%'}}
                    >
                        <TextField
                          variant='outlined'
                          fullWidth
                        //   rowsMax={2}
                          value={value}
                          onChange={(e) => setValue(e.currentTarget.value)}
                        />
                        <Button variant='outlined'
                                onClick={sendMessage}
                        >
                            Отправить
                        </Button>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default Chat