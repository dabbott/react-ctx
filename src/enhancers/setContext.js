import React, { Component } from 'react'

import * as utils from '../utils'
import normalizeSpec from '../utils/normalizeSpec'

export default (input) => {
  const spec = normalizeSpec(input)
  const keys = Object.keys(spec)

  return WrappedComponent => class SetContext extends Component {
    static childContextTypes = spec

    getChildContext() {
      return utils.pick(this.props, keys)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
