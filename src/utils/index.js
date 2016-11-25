export const type = x => ({}).toString.call(x).slice(8, -1)

export const pick = (original, keys = []) =>
  keys.reduce((created, key) => {
    if (key in original) {
      created[key] = original[key]
    }

    return created
  }, {})

export const omit = (original, keys = []) =>
  Object.keys(original).reduce((created, key) => {
    if (keys.indexOf(key) === -1) {
      created[key] = original[key]
    }

    return created
  }, {})

export const mapValues = (original, f) =>
  Object.keys(original).reduce((created, key) => {
    created[key] = f(original[key])
    return created
  }, {})

export const mapKeys = (original, f) =>
  Object.keys(original).reduce((created, key) => {
    created[f(key)] = original[key]
    return created
  }, {})

export const keyMap = keys =>
  keys.reduce((created, key) => {
    created[key] = key

    return created
  }, {})
