import * as React from "react";
import Grid from '@material-ui/core/Grid';
import SideBar from './SideBar';
import Heder from './Header';
import ListFilter from './ListFilter';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
    },
    container: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      marginLeft: drawerWidth + 20,
      marginTop: 150,
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
          <Grid container>
            <Grid item xs={8}>
              <Card className={classes.container}>
                <CardContent>
                  <List>
                    {['タスク１', 'タスク２'].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}


export default App;