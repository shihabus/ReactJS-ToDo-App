import React from 'react';
import Calendar from 'react-calendar';
import DatePicker from './DatePicker'

const TodoTextInput = (props) => {
    const {
        placeholder,
        value,
        onBlur,
        onChange,
        onKeyDown,
        onSetDueDateClicked,
        onDateChange,
        selectedDate,
        showCalender,
        onSaveClicked,
        onDiscardClicked
    } = props
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                autoFocus={true}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                onKeyDown={onKeyDown} />
            <button onClick={onSetDueDateClicked}>Set Due Date</button>
            <button onClick={onSaveClicked}>Save</button>
            <button onClick={onDiscardClicked}>Discard</button>
            <br></br>
            <div>
                {
                    showCalender &&
                    <DatePicker
                        handleDateChange={onDateChange}
                        value={selectedDate}
                    />
                }
            </div>
        </div>
    )

}

export default TodoTextInput;