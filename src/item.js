import React from 'react';

export default class Item extends React.Component{
  handleChange = () => {
    this.props.changeStatus(this.props.item);
  }
  handleRemove = () => {
    this.props.handleRemove(this.props.item);
  }
  render(){
    return (

     <li className={this.props.item.isChecked ? "itemDone":""}><input type="checkbox" onChange={this.handleChange} checked={this.props.item.isChecked}/><p>{this.props.item.text} </p><button className="remove" onClick={this.handleRemove}><i className="fa fa-trash-o" aria-hidden="true"></i></button></li>
    );
  }
};