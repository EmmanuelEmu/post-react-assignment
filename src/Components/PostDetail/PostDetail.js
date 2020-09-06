import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postImage from '../../Post.png';
import './PostDetail.css'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import Comments from '../../Comments/Comments';



//Style of one card 

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



const PostDetail = () => {

    //State and Event Handlefor card
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    //Getting id and API Dynamically
    const { postId } = useParams();
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    

    //Single post data syncronization
    const [singlePost, setSinglePost] = useState({});
    useEffect(() => {
        fetch(postUrl)
            .then(res => res.json())
            .then(data => setSinglePost(data))
    }, []);



    //Loading the comments API
    const [comments, setComments] = useState([]);
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    useEffect(() => {
        fetch(commentsUrl)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
  
    console.log(comments);
    const singlePersonComment = comments.filter(comment=>comment.postId==postId);
    console.log(singlePersonComment.length);


    const { body, id, title, userId } = singlePost;
    return (

        //Card style
        <div className='container'>
            <Container maxWidth="md">
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
          </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={title}
                        subheader={id}
                    />
                    <CardMedia
                        className={classes.media}
                        image={postImage}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Comments:</Typography>
                            <Typography paragraph>
                                {
                                    singlePersonComment.map(userComment => <Comments userComment={userComment}></Comments>)
                                }
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Container>

        </div>
    );
};

export default PostDetail;