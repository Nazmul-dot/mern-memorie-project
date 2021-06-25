import React from 'react'
import { CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Card, Box, Typography, Button } from "@material-ui/core"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '60.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    box: {
        position: "relative"
    },
    posi1: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white'
    },
    posi2: {
        position: 'absolute',
        top: 0,
        right: '10px',


    },
    icon: {
        fontSize: '35px',
        color: 'white'
    },
    card: {
        borderRadius: '15px',
        height: '100%',

    }


}))
const PostItem = ({ item,deleteItem,updateItem,like }) => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} md={6} className=' mx-auto' align='center'>
                <Card component={Box} maxWidth='300px' className={classes.card} align='start' >
                    <CardActionArea >
                        <Box height='200px' className={classes.box}>
                            <CardMedia
                                // className={classes.media}
                                component='img'
                                image={item.image}
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'fill' }}
                            />
                            <Typography variant='h6' className={classes.posi1}>{item.creator}</Typography>
                            <Typography variant='body1' className={classes.posi2}><MoreHorizIcon onClick={()=>updateItem(item)} className={classes.icon} color='inherit' /></Typography>
                        </Box>


                        <CardContent>
                            <Typography className='mb-3' variant='body2'>#{item.tag}</Typography>
                            <Typography className='mb-3' variant='h5'>{item.title}</Typography>
                            <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Illum quasi perspiciatis qui.
                            Magnam, maxime ipsa.
                                     </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                         size='small' 
                         startIcon={
                            <ThumbUpAltIcon fontSize='small' />
                        } 
                        color='primary'
                        onClick={()=>like(item._id)}
                        >like {item.like}</Button>
                        <Button 
                        size='small'
                         startIcon={
                            <DeleteIcon fontSize='small' />
                        } 
                        color='primary' 
                        style={{ marginLeft: 'auto' }}
                        onClick={()=>deleteItem(item._id)}
                        >delete</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default PostItem
