import React from "react";
import styles from "./styles/History.css";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import back from '../../../img/back.svg';

const History = (props) => {
  const classToogle = props.filter === true ? 'toggleVisible' : 'toggleHidden';
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
    const classes = useStyles();
      return (
    <div className={classToogle}>
      <img className="imaArrowBack" onClick={() => props.setFilter(!props.filter)} src={back} alt="" />
      <h1 className="title">Historial</h1>
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <Typography>
       <h1>Desafío del día</h1> 
        <p> Recarga tu tarjeta MACH + 10.000</p>
         <p>+ 2000</p>
         </Typography>
        <Typography className={classes.root} color="textSecondary">
        02/11/2020
        </Typography>
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <Card className="card-history">
      <CardContent className="content-card">
        <Typography className={classes.root}  component= "h1" gutterBottom>
          Desafío del día
        </Typography>
        <Typography  component="p">
         Recarga tu tarjeta MACH + 10.000
        </Typography>
        <Typography variant="body2" component="p">
          + 2000
        </Typography>
        <Typography className={classes.root} color="textSecondary">
        02/11/2020
        </Typography>
        </CardContent>
        </Card>
      </ListItem>   
    </List>
    </div>
  );
};

export default History;
