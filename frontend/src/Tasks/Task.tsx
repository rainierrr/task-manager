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
		<TableCell align='right'> {task.date} </TableCell>
        <TableCell align='right'>
          <IconButton edge="end" aria-label="comments" onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
  );
}
export default Task