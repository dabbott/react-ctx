import React, { Component } from 'react'

import normalizeSpec from '../utils/normalizeSpec'

export default (input) => {
  const spec = normalizeSpec(input)

  return WrappedComponent => class Context extends Component {

    static contextTypes = spec

    render() {
      return (
        <WrappedComponent
          {...this.context}
          {...this.props}
        />
      )
    }
  }
}
