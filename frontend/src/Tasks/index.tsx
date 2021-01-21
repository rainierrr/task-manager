import React, { useState } from 'react';
import { useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'
import {
  addTaskAction,
  deleteAllCompletedTaskAction
} from './Actions'
import { TaskType } from './Type'
import TasksIndex from './TasksIndex'
import AddIcon from '@material-ui/icons/Add'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
    },
    container: {
    },
    completedButton: {
      marginLeft: theme.spacing(10),
    },
    form: {
      marginLeft: theme.spacing(5),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '50%',
    },
    dateField: {
      margin: theme.spacing(3),
      width: '30%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export const APP_KEY = 'kitManager'


const index = () => {
  const classes = useStyles();
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());
  const tasks = useSelector((state: RootState) => state.tasks)
  const dispatch = useDispatch();
  useEffect(() => localStorage.setItem(APP_KEY, JSON.stringify(tasks)),[ tasks ]);
  const category_dict:Array<string> = ["OS", "情報工学実験","プロジェクトデザイン"]
  const priority_dict:Array<string> = ["High", "Mid","Low"]

  const handlePriorityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(event.target.value as string);
  };

  const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };
  const addTask = (e: React.MouseEvent<HTMLElement>) =>{
    e.preventDefault()
    const category_index :number = parseInt(category)
    const priority_index :number = parseInt(priority)
    dispatch(addTaskAction(task, category_dict[category_index], priority_dict[priority_index]))
    setTask('')
    setPriority('')
    setCategory('')
  }

  const deleteAllCompletedDeleteButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(deleteAllCompletedTaskAction())

  }

  const createSelectedMenu = (menus :Array<string>) => {
    return(
      menus.map( (menu :string, index :number) => (
        <MenuItem value={index}>{menu}</MenuItem>
      ))
    )
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
          <Button className={classes.completedButton} variant="outlined" color="secondary" startIcon={<DeleteIcon />}
              onClick={deleteAllCompletedDeleteButton} disabled={tasks.tasks.find((task:TaskType) => task.completed === true) === undefined}>
              完了したタスクの削除
          </Button>
          <div className={classes.form}>
          <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">カテゴリー</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={handleCategoryChange}
              >
                {createSelectedMenu(category_dict)}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">優先度</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                onChange={handlePriorityChange}
              >
                {createSelectedMenu(priority_dict)}
              </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <DateTimePicker className={classes.dateField} value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </div>
        <TasksIndex />
      </CardContent>
    </Card>
    </div>
  );
}


export default index;