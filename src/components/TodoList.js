import React, { Component } from 'react';
import TodoItem from './TodoItem'
import { connect } from 'react-redux';
import {completeTodo,deleteTodo} from '../actions';
import { Button } from '@material-ui/core'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state={
            filter:'all'
        }
    }

    toggleDone(id) {
        this.props.completeTodo(id)
    }

    clickDelete(id) {
        this.props.deleteTodo(id)
    }

    handleSubmit(){
        console.log('Save')
    }

    showAll(){
        this.setState({filter:'all'})
    }

    showTodo(){
        this.setState({filter:'todo'})
    }

    showAllDone(){
        this.setState({filter:'done'})
    }

    render() {
        console.log(this.state)
        if (this.props.todos.length == 1) {
            return (
                <div>List is empty</div>
            )
        } else {
            return (
                <div>
                <ul>
                    {this.props.todos.filter(i=>{
                        if(this.state.filter==='done'){
                            return(i.completed===true)
                        }else if(this.state.filter==='todo'){
                            return(i.completed===false)
                        }
                        return i
                    }).map(item => {
                        if (item.id !== 0) {
                            return (
                                <TodoItem
                                    item={item}
                                    key={item.id}
                                    toggleDone={() => this.toggleDone(item.id)}
                                    clickDelete={() => this.clickDelete(item.id)}
                                />
                            )
                        }
                    })}
                </ul>
                <Button color="primary" onClick={()=>this.showAllDone()}>show done</Button>
                <Button color="primary" onClick={()=>this.showAll()}>show all</Button>
                <Button color="primary" onClick={()=>this.showTodo()}>show todo</Button>
                </div>
            )
        }
    }
}


const mapStateToProps = ({ todos }) => {
    return { todos }
}

export default connect(mapStateToProps, {completeTodo,deleteTodo})(TodoList);