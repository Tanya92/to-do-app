import Item from './item';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addToList, deleteFromList,setText, changeStatus} from './to-do-reducer';
import './style.css';

class ToDoList extends Component {
  handleChange = (event) => {
    this.props.updateInput(event.target.value);
  }
  handleClick = () => {
     this.props.addNewItem(this.props.input);
  }
  keyPress = (event) => {
      if (event.which == 13) {
          this.props.addNewItem(this.props.input);
      }
  }
  
  
  render() {
    const items = this.props.list.map(item => <Item key={item.id} item={item} changeStatus={this.props.changeStatus} handleRemove={this.props.deleteItem}/>);
    return (
      <div>
      <h1>toDo App</h1>
      <div id="toDoContainer">
        <input
            type="text"
            id="toDoText"
            className={this.props.input.length > 30 ? "error": ""}
            value={this.props.input}
            onChange={this.handleChange}
            onKeyPress={this.keyPress}
        >
        </input>
        <button id="addToDo" onClick={this.handleClick} disabled={this.props.input.length == 0}>ADD</button>
      </div>
      <ul>
         {items}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
      addNewItem: (text) => {
        dispatch(addToList(text))
      },
      updateInput: (input) => {
        dispatch(setText(input))
      },
      deleteItem: (item) => {
        dispatch(deleteFromList(item))
      },
      changeStatus: (item) => {
        dispatch(changeStatus(item));
      }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
