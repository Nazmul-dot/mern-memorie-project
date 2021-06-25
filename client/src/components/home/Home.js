import React from 'react'
import Form from '../form/Form'
import Post from '../post/Post'
import { Box, AppBar, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
}))
const Home = () => {
    const classes = useStyles()
    return (
        <>
            <div>
                <div className='container-fluid' >
                    <Container maxWidth='lg'>
                        <AppBar className={classes.appBar} position="static" color="inherit">
                            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                            {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
                        </AppBar>
                    </Container>

                    <div className='row'>
                        <div className='col-md-10 mx-auto  my-1'>
                            <div className='row d-flex'>
                                <div className='col-md-8  mx-auto order-2 order-md-1'>
                                    <Post />
                                </div>
                                <div className='col-md-4 col-10  mx-auto order-1 order-md-2'>
                                    <div className=' '>
                                        <Form />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
