import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    AppBar: {
      zIndex: theme.zIndex.drawer + 1,
      position: "fixed"
    },
    toolbar: theme.mixins.toolbar
  })
);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title} >
            Kit-Manager
          </Typography >
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default Header;