import React, { Component, Children, cloneElement } from 'react'

import * as utils from '../utils'
import { normalize } from '../utils/contextTypes'
import context from '../enhancers/context'

let warnedChildCount = false

const createInnerComponent = (props) => {
  const spec = (
    props.contextTypes ||
    Object.keys(utils.omit(props, ['children', 'contextTypes', 'contextNamespace']))
  )
  const keys = Object.keys(normalize(spec))

  class MapContextToPropsInner extends Component {

    constructor(childProps) {
      super()

      this.state = this.buildState(childProps)
    }

    componentWillReceiveProps(nextChildProps) {
      this.setState(this.buildState(nextChildProps))
    }

    buildState(childProps) {
      return {childContextProps: utils.pick(childProps, keys)}
    }

    render() {
      const {children} = this.props
      const {childContextProps} = this.state

      if (Children.count(children) !== 1) {
        if (!warnedChildCount) {
          warnedChildCount = true

          console.warn('Must return exactly 1 child from MapContextToProps')
        }

        return null
      }

      return cloneElement(Children.only(children), childContextProps)
    }
  }

  return context(spec, props.contextNamespace)(MapContextToPropsInner)
}

export default class MapContextToProps extends Component {

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
    const {children} = this.props
    const {WrappedComponent} = this.state

    return (
      <WrappedComponent children={children} />
    )
  }
}
