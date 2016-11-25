import React, { Component } from 'react'

import * as utils from '../utils'
import setContext from '../enhancers/setContext'

export default class ContextProvider extends Component {

  constructor(props) {
    super()

    this.state = this.buildState(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.buildState(nextProps))
  }

  buildState(props) {
    return {WrappedComponent: this.createWrappedComponent(props)}
  }

  createWrappedComponent(props) {
    class WrappedComponent extends Component {
      render() {
        return this.props.children
      }
    }

    const spec = (
      props.childContextTypes ||
      Object.keys(utils.omit(props, ['children', 'childContextTypes', 'contextNamespace']))
    )

    return setContext(spec, props.contextNamespace)(WrappedComponent)
  }

  render() {
    const {WrappedComponent} = this.state

    return (
      <WrappedComponent {...this.props} />
    )
  }
}
