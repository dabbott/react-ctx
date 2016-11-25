import React, { Component } from 'react'

import * as utils from '../utils'
import { normalize, namespace } from '../utils/contextTypes'

export default (input, prefix) => {
  const normalized = normalize(input)
  const contextTypes = prefix ? namespace(normalized, prefix) : normalized

  // Keys of props to pull from context
  const keys = Object.keys(normalized)

  return WrappedComponent => class SetContext extends Component {
    static childContextTypes = contextTypes

    getChildContext() {
      const props = utils.pick(this.props, keys)

      return prefix ? namespace(props, prefix) : props
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
