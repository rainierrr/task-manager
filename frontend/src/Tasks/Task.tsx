import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';
import {
  deleteTaskAction,
  checkTaskAction
} from './Actions'
import { TaskType } from './Type'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const week = [ "日", "月", "火", "水", "木", "金", "土" ]

const Task = ({task}: {task: TaskType}) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const checkTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(checkTaskAction(task.id, !(task.completed)))
  }

  const deleteTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(deleteTaskAction(task.id))
  }

  const dateFormat = (date :Date) => {
	if (typeof date === 'string'){
		date = new Date(date)
	}
	return (date.getMonth()+1) + '月' + date.getDate() + '日(' + week[date.getDay()]+ ') '+  date.getHours() + '時' + + date.getMinutes() + '分'
  }

  return (
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={task.completed}
            disableRipple
            onClick={checkTask}
          />
        </TableCell>
		<TableCell> {task.category} </TableCell>
        <TableCell>
          {task.name}
        </TableCell>
		<TableCell align='right'> {task.priority} </TableCell>
		<TableCell align='right'> {dateFormat(task.date)} </TableCell>
        <TableCell align='right'>
          <IconButton edge="end" aria-label="comments" onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
  );
}
export default Task