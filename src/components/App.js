import React from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import '../App.css';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
    </div>
)

export default App

