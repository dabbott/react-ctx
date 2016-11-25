import { PropTypes } from 'react'

import * as utils from './index'

export const normalize = (contextTypes) => {
  const type = utils.type(contextTypes)

  switch (type) {
    case 'Array':
      return utils.mapValues(
        utils.keyMap(contextTypes),
        () => PropTypes.any
      )
    case 'Object':
      return contextTypes
    default:
      return {}
  }
}

export const namespace = (contextTypes, prefix) =>
  utils.mapKeys(contextTypes, key => `${prefix}.${key}`)

export const extract = (contextTypes, prefix) => {
  const namespacedKeys = Object
    .keys(contextTypes)
    .filter(key => key.indexOf(`${prefix}.`) === 0)

  return utils.mapKeys(
    utils.pick(contextTypes, namespacedKeys),
    key => key.slice(prefix.length + 1)
  )
}
