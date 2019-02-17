import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import TodoTextInput from './TodoTextInput'

class AddTodos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            date: new Date(),
            showCalender: false
        }
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.addTodo(text, this.state.date)
            this.setState({ text: '' })
        }
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
        this.setState({ showCalender: true })
    }

    onSaveClicked=()=>{
        this.props.addTodo(this.state.text, this.state.date)
        this.setState({ text: '',date: new Date(),showCalender: false})
    }

    onDiscardClicked=()=>{
        this.setState({text:''})
    }

    render() {
        return (
            <div>
                <TodoTextInput
                    placeholder={'Enter todo item'}
                    autoFocus={true}
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
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodos);