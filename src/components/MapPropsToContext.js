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

  InnerComponent = createInnerComponent(this.props)

  render() {
    const {InnerComponent} = this

    return (
      <InnerComponent {...this.props} />
    )
  }
}
