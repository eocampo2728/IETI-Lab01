import React from 'react';
import {Todo} from './Todo'
export default class TodoList extends React.Component{

    constructor(props){
        super(props);        
    }

    numberList(){
        const numbers = this.props.todoList;
        const listItems = numbers.map((number) => (
            <li key={number.toString()}>
                {number.text}
            </li>)
        );
        return <ul>{listItems}</ul>;
    }

    render(){
        
        return (
            this.numberList()
        );
    }
}