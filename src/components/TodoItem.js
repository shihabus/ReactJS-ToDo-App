import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput'
import { connect } from 'react-redux';
import { editTodo,editTodoDate } from '../actions'


class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            text: '',
            date: new Date(),
            showCalender: false
        }
    }



    handleSubmit = e => {
        const text = e.target.value.trim()
        // if (e.which === 13) {
        //     this.props.editTodo(this.props.item.id, text)
        //     this.setState({ isEditing: false })
        // }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ text: e.target.value })
    }

    handleBlur = e => {
        e.preventDefault()
        
    }

    onDateChange = date => {
        this.setState({ date, showCalender: false })
        console.log('Selected ', date)
    }

    onSetDueDateClicked = () => {
        console.log('HI')
        this.setState({ showCalender: true })
    }

    onSaveClicked=()=>{
        this.props.editTodo(this.props.item.id, this.state.text)
        this.props.editTodoDate(this.props.item.id, this.state.date)
        this.setState({ text: '',isEditing:false })
    }

    onDiscardClicked=()=>{
        this.setState({text:'',isEditing:false})
    }

    render() {
        const { toggleDone, clickDelete } = this.props
        const { text,completed,dueDate } = this.props.item
        if (this.state.isEditing) {
            return (
                <TodoTextInput
                    value={this.state.text}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleSubmit}

                    onSetDueDateClicked={this.onSetDueDateClicked}
                    onDateChange={this.onDateChange}
                    selectedDate={this.state.date}
                    showCalender={this.state.showCalender}
                    onDiscardClicked={this.onDiscardClicked}
                    onSaveClicked={this.onSaveClicked}
                />
            )
        }
        return (
            <div>
                <label
                    onDoubleClick={() => this.setState({ isEditing: true, text: text })}
                    style={{ textDecoration:completed===true? 'line-through' : '' }}
                >{text}</label>
                <br></br>
                <label>{dueDate.getDate()}</label>/
                <label>{dueDate.getMonth()}</label>/
                <label>{dueDate.getFullYear()}</label>
                <button onClick={toggleDone}>Done</button>
                <button onClick={clickDelete}>Delete</button>
            </div>
        );
    }
}

export default connect(null, { editTodo,editTodoDate })(TodoItem);