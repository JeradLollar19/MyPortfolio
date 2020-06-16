import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DreamsPic from '../assets/dreams.png';
import FilmPic from '../assets/film.png';
import NetflixPic from '../assets/StaticWebpage.png';
import CssPic from '../assets/CSSProj.png';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginLeft: 26,
    },
    media: {
        height: 140,
    },
    root2: {
        maxWidth: 345,
        marginLeft: 35,
    },
    root3: {
        maxWidth: 345,
        marginLeft: 44,
    },
    root4: {
        maxWidth: 345,
        marginLeft: 53,
    },
});


const MyWork = () => {
    const classes = useStyles();

    return (
        <div id="MyWork" className="myWork">
            <h2 id="myWorkHead">EXAMPLES OF PROJECTS</h2>
            <hr id="hr2"/>
            <div className="cards">
            <Card id="card" className={classes.root}>
                <CardActionArea href="http://tjmm-dreamcatcher-client.herokuapp.com/" target="blank">
                    <CardMedia
                        className={classes.media}
                        image={DreamsPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            <b>DREAMCATCHER</b>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Collaberated with a team to create a Node Server and React Application using Typescript.</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card id="card" className={classes.root2}>
                <CardActionArea href="https://jl-filmapp-client.herokuapp.com/" target="blank">
                    <CardMedia
                        className={classes.media}
                        image={FilmPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            <b>CINEMA REVIEWS</b>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            A full stack application I built using PostgreSQL, Express, React, and Node (PERN).</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card id="card" className={classes.root3}>
                <CardActionArea href="https://jeradlollar19.github.io/staticLayout/" target="blank">
                    <CardMedia
                        className={classes.media}
                        image={NetflixPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                           <b>STATIC LAYOUT</b>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            A mockup I did of a public webpage (Netfilx) utilizing HTML and CSS.</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>

            <div className="cardsRow2">
            <Card id="card" className={classes.root4}>
                <CardActionArea href="https://codepen.io/lollajer001/pen/OJVZaQX" target="blank">
                    <CardMedia
                        className={classes.media}
                        image={CssPic}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h4">
                            <b>CSS PROJECT</b>
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            A project where I had to build a cartoon/creature with nothing but pure CSS.</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}


export default MyWork;