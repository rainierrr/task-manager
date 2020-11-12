import * as React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
    },
    container: {
    },
  })
);

function Templete() {
  const classes = useStyles();
  return (
    <div>templete</div>
  );
}


export default Templete;