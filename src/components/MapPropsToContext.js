import React, { Component } from 'react'

import * as utils from '../utils'
import setContext from '../enhancers/setContext'

const createInnerComponent = (props) => {
  const spec = (
    props.contextTypes ||
    Object.keys(utils.omit(props, ['children', 'contextTypes', 'contextNamespace']))
  )

  class MapPropsToContextInner extends Component {
    render() {
      return this.props.children
    }
  }

  return setContext(spec, props.contextNamespace)(MapPropsToContextInner)
}

export default class MapPropsToContext extends Component {

  constructor(props) {
    super()

    this.state = this.buildState(props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.buildState(nextProps))
  }

  buildState(props) {
    return {WrappedComponent: createInnerComponent(props)}
  }

  render() {
    const {WrappedComponent} = this.state

    return (
      <WrappedComponent {...this.props} />
    )
  }
}
