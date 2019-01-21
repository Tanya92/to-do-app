import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { render } from 'react-dom';

import ToDoList from './to-do-list';
import {toDoReducer} from './to-do-reducer';

const store = createStore(toDoReducer);

class App extends Component {
  render (){
    return (
      <Provider store={store}>
        <ToDoList/>
      </Provider>
    )
  }
}




render(<App/>, document.getElementById('root'));
 

