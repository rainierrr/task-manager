import React, { useState } from 'react';
import Header from '../Header';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(1),
      marginTop: 70,
    },
    content: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50%',
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);
const LineForm = () => {
  const classes = useStyles();
  const [lineID, setLineID] = useState('');
  const [lineSecretID, setLineSecretID] = useState('');

  const sendButton = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    setLineID('')
    setLineSecretID('')
  }
  return(
    <div>
      <Header />
      <Card className={classes.container}>
        <CardContent className={classes.content}>
          <h2>LINE情報 入力ホーム</h2>
          <TextField id="lienIDForm"label="LINE ID" value={lineID} onChange={e => setLineID(e.target.value)} className={classes.textField}/>
          <TextField id="lienSecretIDForm"label="LINE SECRET ID" value={lineSecretID} onChange={e => setLineSecretID(e.target.value)} className={classes.textField}/>
          <Button onClick={sendButton} variant="contained" color="primary" disabled={lineID === '' || lineSecretID === ''}>
            Send
          </Button>
        </CardContent>
      </Card>

    </div>
  )
}

export default LineForm