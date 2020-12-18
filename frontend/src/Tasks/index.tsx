import * as React from "react"
import { useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'
import {
  addTaskAction,
  deleteAllCompletedTaskAction
} from './Actions'
import { TaskType } from './Type'
import Task from './Task'
import List from '@material-ui/core/List'
import AddIcon from '@material-ui/icons/Add'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
    },
    container: {
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50%',
    },
  })
);

export const APP_KEY = 'kitManager'


function index() {
  const classes = useStyles();
  const [task, setTask] = React.useState('');
  const tasks = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch();
  useEffect(() => localStorage.setItem(APP_KEY, JSON.stringify(tasks)),[ tasks ]);

  const addTask = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    dispatch(addTaskAction(task))
    setTask('')
  }

  const deleteAllCompletedDeleteButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(deleteAllCompletedTaskAction())

  }

  return (
    <div>
      <Card>
        <CardContent>
        <h1>課題一覧</h1>
        <h2>今日やること</h2>
        <Fab size="small" color="secondary" onClick={addTask} disabled={task === ''}>
          <AddIcon />
        </Fab>
        <TextField id="standard-basic" label="新しいタスク" value={task} onChange={e => setTask(e.target.value)} className={classes.textField}/>
        <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}
          onClick={deleteAllCompletedDeleteButton} disabled={tasks.tasks.find((task:TaskType) => task.completed === true) === undefined}>
          完了したタスクの削除
        </Button>
        <List>
          { tasks.tasks.map((task: TaskType) => ( <Task key={task.id} task={task}/> )) }
        </List>
        </CardContent>
      </Card>
    </div>
  );
}


export default index;