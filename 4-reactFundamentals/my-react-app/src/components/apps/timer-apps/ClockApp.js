import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        var dateTwo = this.getDiffTime();
        this.state = {
            time: date,
            altTime: dateTwo,
        }
    }
    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    getDiffTime() {
        const dateTwo = new Date()
        dateTwo.setHours(dateTwo.getHours()-1)
        return dateTwo.toLocaleTimeString()
    }
    
    componentDidMount() {
        const _this = this;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            var dateTwo = _this.getDiffTime();
            _this.setState({
                time: date,
                altTime: dateTwo,
            })
        }, 1000)
    }  
    componentWillUnmount() {
        clearInterval(this.timer);
    } 
    render() {
        return (
            <div>
                <h4 className="section-title">Indianapolis Time</h4>
                <p>{this.state.time}</p>
                <h4 className="section-title">Chicago Time</h4>
                <p>{this.state.altTime}</p>
            </div>
        );
    }
}