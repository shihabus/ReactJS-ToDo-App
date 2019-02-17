import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodos from './AddTodos';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

class App extends Component {
  

  render() {
    return (
      <div>
        <AddTodos/>
        <TodoList/>
          
      </div>
    )
  }
}

export default App