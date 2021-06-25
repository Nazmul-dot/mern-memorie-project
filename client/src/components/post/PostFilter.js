import { Box, ExpansionPanelDetails, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {filterPost} from '../redux/post/postAction'
const PostFilter = () => {
    const dispatch = useDispatch()
    const [data,setdata]=useState({
        search:''
    })

    const handlechange=(e)=>{
        e.preventDefault()
        const value=e.target.value;
        const name=e.target.name;
        setdata({...data,[name]:value})
        dispatch(filterPost({name,value}))
    }
    return (
        <>
{/* style={{paddingTop:'5px'}} */}
            <Box component='form' component={Paper} >
                {/* <Paper> */}
                    <TextField
                        // variant='outlined'
                        name='search'
                        value={data.search}
                        onChange={handlechange}
                        size='small'
                        fullWidth
                        label='Search'
                        color='secondary'
                        required
                    />
                {/* </Paper> */}

            </Box>
        </>
    )
}

export default PostFilter
