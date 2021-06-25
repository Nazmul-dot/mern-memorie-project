import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import {creatpost,updatepost} from '../redux/post/postAction'
const inital={
    creator:'',
    title:'',
    message:'',
    tag:'',
    image:''
}
const Form = () => {
    const dispatch = useDispatch()
    const {seletcPost} = useSelector(state => state.postData)
    console.log(seletcPost._id)
    const [data,setdata]=useState(inital)

    useEffect(()=>{
        if(seletcPost._id){
            setdata(seletcPost)
        }else{
            setdata(inital)
        }
    },[seletcPost])
    const handlechange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value;
        if (name === 'image') {
            value = e.target.files[0]
            console.log(value)
        } else {
            value = e.target.value;
        }
        setdata({ ...data, [name]: value })
    }
    const {creator,title,message,image,tag} =data
    const submit=(e)=>{
        e.preventDefault()
        if(data._id){
            dispatch(updatepost(data))
        }else{
            dispatch(creatpost(data))
        }
        // console.log(data)
        setdata(inital)
    }
    const clear=(e)=>{
        e.preventDefault()
        setdata(inital)
    }
    return (
        <>
            <form className='mb-3'>
                <Grid container component={Paper} elevation={4} style={{ padding: '0 17px' }}>
                    <Grid item xs={12}>
                        <Typography component={Box} variant='h5' style={{margin:'5px 0'}} align='center' >Creating a Memory</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth
                            onChange={handlechange}
                            value={creator}
                            name='creator'
                            label='creator'
                            id="outlined-basic"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth
                            onChange={handlechange}
                            value={title}
                            name='title'
                            label='Title'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth
                            onChange={handlechange}
                            value={message}
                            name='message'
                            multiline
                            rows='4'
                            label='Message'
                        />
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                margin='dense'
                                size='small'
                                fullWidth
                                onChange={handlechange}
                                value={tag}
                                name='tag'
                                label='Tag'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='filled'
                                margin='dense'
                                size='small'
                                fullWidth
                                onChange={handlechange}
                                name='image'
                                type='file'
                                
                            />
                        </Grid>
                        <Button onClick={submit} variant='contained' color='primary' fullWidth style={{margin:'5px 0'}}>Submit</Button>
                        <Button onClick={clear} variant='contained' color='secondary' fullWidth style={{margin:'5px 0 10px 0'}}>Clear</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default Form
