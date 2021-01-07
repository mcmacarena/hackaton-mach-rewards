import React from "react";
import styles from "./styles/History.css";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import back from "../../../img/back.svg";
import Grid from "@material-ui/core/Grid";

const History = (props) => {
  const classToogle =
    props.filter === true ? "toggleVisibleHistory" : "toggleHiddenHistory";
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      border: "none",
      boxShadow: "none",
    },
    strongText: {
      fontWeight: "bold",
      fontFamily: "Nunito",
      fontSize: "18px",
    },
    orangeText: {
      color: "#f90",
      fontFamily: "Nunito",
      fontSize: "18px",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classToogle}>
      <h1 className="title">
        <img onClick={() => props.setFilter(!props.filter)} src={back} alt="" />
        &nbsp; Historial de beneficios
      </h1>
      <Stepper nonLinear={true} orientation="vertical">
        <Step active={true} key={0}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={1}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Desafío del día
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
            <Typography component="p">
              Recarga tu tarjeta MACH + 10.000
            </Typography>
            <Typography
              className={[classes.orangeText, classes.strongText]}
              component="p"
            >
              + 2000
            </Typography>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Categoría MACH 
                  Explorer
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
          </StepContent>
        </Step>
        <Step active={true} key={2}>
          <StepLabel>&nbsp;</StepLabel>
          <StepContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography className={classes.strongText} component="h2">
                  Categoría MACH 
                  Explorer
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="textSecondary">02/11/2020</Typography>
              </Grid>
            </Grid>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

export default History;
