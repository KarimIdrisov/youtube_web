import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import {Box, CardActionArea, CardContent} from "@material-ui/core";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {parseDate} from "./VideoMain";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "inline",
        padding: theme.spacing(1),
        boxShadow: "none",
        background: "#FFFFFF",
    },
    content: {
        marginTop: 63,
        paddingTop: 16,
        margin: 8,
        width: "100%",
        height: "100%",
        flexGrow: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        boxShadow: "none",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        borderRadius: 0,
        boxShadow: "none",
        background: "#FFFFFF",
        width: '105%',
        height: '100%',
        display: 'inline',
        flexDirection: 'column',

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        width: "100%",
        flexGrow: 1,
        marginTop: theme.spacing(10),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    media: {
        width: 350,
        height: 200,
    },
    avatar: {
        marginTop: 5,
    },
    video_title: {
        maxHeight: 100,
        margin: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: "#000000",
        textAlign: "center",
        fontSize: 16,
        textDecoration: "none",
    },
    subheader: {
        fontSize: 15,
        color: "#9fa0a0"
    }

}));

export default function SearchMain(props) {

    const classes = useStyles();
    let videos = []

    if (props.content.videos === null) {
        return (
            <div>
                <h1>
                    loading
                </h1>
            </div>
        )
    } else {
        if (props.videos === null) {
            return (
                <h1>loading</h1>
            )
        }
        if (props.content !== null) {
            videos = props.content.videos.items
        }
        return (
            <>
                <Grid container spacing={3} className={classes.cardGrid}>
                    {videos.map((card, index) => (
                        <Grid item key={index} xs={12}>
                            <Box>
                                <CardActionArea style={{ display: "flex", justifyContent: "start"}}>
                                    <Link to={"/video/" + card.id.videoId} style={{textDecoration: 'none'}}>
                                        <Card className={classes.card}>
                                            <CardMedia className={classes.media}
                                                       image={card.snippet.thumbnails.high.url}
                                                       title="video"/>
                                        </Card>
                                    </Link>
                                    <CardContent>
                                        <Typography>
                                            {card.snippet.title}
                                        </Typography>
                                        <Typography className={classes.subheader}>
                                            {parseDate(card.snippet.publishedAt)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}