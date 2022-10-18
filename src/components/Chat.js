import React, {useContext, useState} from 'react'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Avatar, Button, Container, Grid, TextField } from '@mui/material'
import Loader from './Loader'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        // console.log(value)
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50, marginTop: 20}}
                // alignItems={'center'}
                justifyContent={'center'}
            >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto', padding: 10}}>
                    {messages.map( (messages) => {
                        return (
                            <div
                              key={messages.createdAt}
                              style={{
                                marginTop: 5,
                                padding: 10,
                                border: user.uid === messages.uid
                                 ? '2px solid green'
                                 : '1px solid blue',
                                marginLeft: user.uid === messages.uid
                                 ? 'auto'
                                 : '10px',
                                width: 'fit-content',

                            }}>
                                <Grid container>
                                    <Avatar src={messages.photoURL}/>
                                    <div>{messages.displayName}</div>
                                </Grid>
                                <div>{messages.text}</div>
                            </div>
                        )
                    })}
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