import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

import withExampleBasename from '../withExampleBasename'

import './app.css'

const App = withRouter(
  React.createClass({

    getInitialState() {
      return {}
    },

    componentWillReceiveProps(nextProps) {
      console.log(nextProps.params.splat)
    },

    render() {
      console.log(this.props.params.splat)

      const clickEvent = (e) => {
        e.preventDefault()
        const link = e.target.getAttribute('href')
        browserHistory.push(link)
      }

      return (
        <div className="App">
          <div><Link to="/start">/start (root)</Link></div>
          <div><Link to="/test/start">/test/start (sub)</Link></div>
          <div><Link to="splat2Link">splat2 (with link)</Link></div>
          <div><a href="splat2ATag" onClick={clickEvent}>splat2 (with a tag)</a></div>
          Splat Parameter: {this.props.params.splat}
        </div>
      )
    }
  })
)

render((
  <Router history={withExampleBasename(browserHistory, __dirname)}>
    <Route path="/" component={App} />
    <Route path="**" component={App} />
  </Router>
), document.getElementById('example'))
