import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <h2>{this.props.text}{this.props.priority}{this.props.dueDate}</h2>
        );
    }

}