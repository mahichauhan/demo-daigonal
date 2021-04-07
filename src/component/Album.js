import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import Loader from './Loader'
import data from '../Api/CONTENTLISTINGPAGE-PAGE1.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'black',
  },
  title:{
      flexGrow:1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  icon1: {},
  cardGrid: {
    paddingTop: theme.spacing(4.5),
    paddingBottom: theme.spacing(1),
    backgroundColor: 'black',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
    height: 170,
  },
  cardContent: {
    flexGrow: 1,
    paddingLeft: 0,
    backgroundColor: 'black',
  },
}));

const cards = [...Array(20)];

export default function Album() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  return (
    isLoading ? <Loader />:  
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="relative" className={classes.toolbar}>
          <Toolbar>
            <ArrowBackIcon className={classes.icon} />
            <Typography
              variant="h6"
              className={classes.title}
              color="inherit"
              noWrap
            >
              Romantic Comedy
            </Typography>
            <SearchIcon className={classes.icon1} />
          </Toolbar>
        </AppBar>
      </div>

      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={1}>
            {data.page['content-items'].content.map((card, i) => (
              <Grid item key={card} xs={4} sm={6} md={4}>
                <Card className={classes.card} elevation={0} square={true}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`./assests/images/${
                        card['poster-image']
                    }`}
                    title={card['poster-image']}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography color="primary">{card.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
