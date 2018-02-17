import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
// absolute path import first.
import './App.css'
import Clock from './Clock'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'Dec 28, 2018',
      newDeadLine: ''
    }
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadLine })
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={e => this.setState({ newDeadLine: e.target.value })}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (!e.target.value) return
                e.preventDefault()
                this.changeDeadline()
              }
            }}
          />
          <Button
            type="button"
            id="sub"
            className="btn btn-secondary"
            onClick={() => { this.changeDeadline() }}
          >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
export default App
