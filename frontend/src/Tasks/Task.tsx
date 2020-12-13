import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';
import { TaskType } from './Type'
import { useDispatch } from 'react-redux';
import {
  deleteTaskAction,
  checkTaskAction
} from './Actions'

const Task = ({task}: {task: TaskType}) => {
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
      <ListItem key={task.id} role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            tabIndex={-1}
            disableRipple
            onClick={checkTask}
          />
        </ListItemIcon>
        <ListItemText primary={task.text} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
}

export default Task