import { PropTypes } from 'react'

import * as utils from './index'

export default (spec) => {
  switch (utils.type(spec)) {
    case 'Array':
      return utils.mapValues(
        utils.keyMap(spec),
        () => PropTypes.any
      )
    case 'Object':
      return spec
    default:
      return {}
  }
}
