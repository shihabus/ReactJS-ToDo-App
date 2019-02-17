import React, { Component } from 'react';
import { MuiPickersUtilsProvider, DatePicker,InlineDatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

export default class DatePickerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            selectedDate: new Date()
        }
    }

    handleDateChange = date => {
        console.log('Today', new Date())
        console.log('selectedDate', date)
        this.setState({ selectedDate: date });
    };

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <InlineDatePicker
                    variant="outlined"
                    keyboard
                    clearable
                    label="Due date"
                    disablePast
                    animateYearScrolling={true}

                    value={this.props.value}
                    onChange={this.props.handleDateChange}
                />
            </MuiPickersUtilsProvider>
        )
    }
}