import * as React from "react";
import Grid from '@material-ui/core/Grid';
import SideBar from './SideBar';
import Heder from './Header';
import ListFilter from './ListFilter';
import TaskList from './Tasks/index';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    container: {
      marginLeft: drawerWidth + 20,
      marginTop: 70,
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
        <Heder />
        <SideBar/>
        <ListFilter />
        <div>
          <Grid container className={classes.container}>
            <Grid item xs={8}>
              <div className={classes.content}>
                <TaskList/>
              </div>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}


export default App;