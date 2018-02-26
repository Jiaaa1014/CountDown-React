import React, { Component } from 'react'
import PropTypes from 'prop-types'
import path from 'path'
import '../App.css'


class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.props.deadline)
    }, 1000)
  }


  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / 1000 / 60 / 60) % 24)
    const days = Math.floor(time / 1000 / 60 / 60 / 24)

    this.setState({
      days, hours, minutes, seconds
    })
  }

  leading(num) { return num < 10 ? `0${num}` : num }

  render() {
    console.log(path.join(__dirname))
    return (
      <div>
        <div className="Clock-days">
          {this.leading(this.state.days)} days
        </div>
        <div className="Clock-hours">
          {this.leading(this.state.hours)} hours
        </div>
        <div className="Clock-mins">
          {this.leading(this.state.minutes)} minutes
        </div>
        <div className="Clock-secs">
          {this.leading(this.state.seconds)} seconds
        </div>
      </div>
    )
  }
}

Clock.propTypes = {
  deadline: PropTypes.string.isRequired
}

export default Clock
