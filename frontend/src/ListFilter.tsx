import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      position: "relative",
      height: "100%",
      width: drawerWidth,
      marginTop: 150,
    }
  })
);

function ListFilter(){
  const classes = useStyles();
  return (
    <div>
        <Drawer open={true} variant="permanent" anchor='right'>
            <List className={classes.drawer}>
              {['フィルター１', 'フィルター２', 'フィルター３', 'フィルター４'].map((text, index) => (
                <ListItem button key={text}>
                    <FormControlLabel
                      control={
                        <Switch
                      checked={false}
                    />
                      }
                      label={text}
                    />
                </ListItem>
              ))}
            </List>
        </Drawer>
    </div>
  );
}

export default ListFilter;