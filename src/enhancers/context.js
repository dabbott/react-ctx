import React, { Component } from 'react'

import { normalize, namespace, extract } from '../utils/contextTypes'

export default (input, prefix) => {
  const normalized = normalize(input)
  const contextTypes = prefix ? namespace(normalized, prefix) : normalized

  return WrappedComponent => class Context extends Component {
    static contextTypes = contextTypes

    render() {
      // TODO memoize extract?
      const context = prefix ? extract(this.context, prefix) : this.context

      return (
        <WrappedComponent
          {...context}
          {...this.props}
        />
      )
    }
  }
}
