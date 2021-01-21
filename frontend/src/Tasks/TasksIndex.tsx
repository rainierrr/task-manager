import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Task from './Task'
import { TaskType } from './Type'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name :string, calories :number, fat :number, carbs :number, protein :number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const TaskIndex = () => {
  const classes = useStyles();
  const tasks = useSelector((state: RootState) => state.tasks)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                //indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={false}
                //onChange={onSelectAllClick}
                inputProps={{ 'aria-label': 'select all desserts' }}
              />
            </TableCell>
            <TableCell>カテゴリー</TableCell>
            <TableCell>課題</TableCell>
            <TableCell align="right">優先度</TableCell>
            <TableCell align="right">期日</TableCell>
            <TableCell align="right">削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { tasks.tasks.map((task: TaskType) => ( <Task key={task.id} task={task}/> )) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskIndex