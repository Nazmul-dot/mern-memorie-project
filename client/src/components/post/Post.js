import React from 'react'
import { CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Card, Box, Typography, Button } from "@material-ui/core"
import {useDispatch,useSelector} from 'react-redux'
import {likePost,deleteCart,selectItem} from '../redux/post/postAction'
import PostItem from './PostItem';
import PostFilter from './PostFilter';
const Post = () => {
    const {allpost} = useSelector(state => state.postData)
    const dispatch = useDispatch()
    const deleteItem=(id)=>{
        // alert('delet')
        dispatch(deleteCart(id))
    }
    const updateItem=(item)=>{
        // alert('updaet')
        dispatch(selectItem(item))
    }
    const like=(id)=>{
        dispatch(likePost(id))
        // alert('like')
    }
    return (
        <>
            <Container maxWidth='xl' className=''>
                <Grid container  spacing={2} style={{ color: 'white' }}>
                    <Grid item xs={12} className=' mx-auto'>
                        <PostFilter/>
                    </Grid>
                  {
                   allpost?(
                    allpost.map((item,ind)=>{
                        return(
                            <PostItem
                            key={ind}
                            item={item}
                            deleteItem={deleteItem}
                            updateItem={updateItem}
                            like={like}
                            />
                        )
                    })
                   ):('')   
                  }
                   
                </Grid>
            </Container>
        </>
    )
}

export default Post
