import React, { Component } from 'react';
import {Icon, Navbar, Button} from '@blueprintjs/core'
import axios from 'axios'

import Output from './Output'
const API_URL = 'https://api.publicapis.org/'

class Header extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}entries?title=${this.state.query}`, {'mode':'core'})
      .then(({ data }) => {
        this.setState({
          results: data.entries
        })
      })
  }
  handleInputChange = () => {
    this.setState({
      query: this.header.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        return <h1>Nop</h1>
      }
    })
  }

  render() {
    return (
      <div className="toNormalize">
        <nav className="bp3-navbar modifier bp3-dark">
          <div className="bp3-navbar-group bp3-align-left">
            <div className="bp3-navbar-heading brand"><i class="lni-rocket"></i> FindQuickly</div>
            <input
              className="bp3-input search-field"
              placeholder="Search your API.."
              type="text"
              ref={input => this.header = input}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="bp3-navbar-group bp3-align-right">
            <span className="bp3-navbar-divider"></span>
            <h4><i class="lni-github-original"></i> FoobarIT</h4>
          </div>
        </nav>

      <Output results={this.state.results} />
      </div>
    );
  }
}

export default Header;
