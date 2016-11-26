react-ctx
=====================

[![npm version](https://img.shields.io/npm/v/react-ctx.svg?style=flat-square)](https://www.npmjs.com/package/react-ctx)

Higher order component for interacting with context

```js
npm install --save react-ctx
```

## Why?

You're making a library and need to provide context to the component hierarchy. You don't want to use the context API directly, so you go with the `Provider`/`connect` pattern from `redux`. Then you realize you want to add more things to context, and... what if other libraries put something in context under the same key? You're bouncing back and forth between files for handling contextTypes and childContextTypes, which really aren't the purpose of your library. You don't want to worry about this, so you look for a simple wrapper and find `react-ctx`.

### Simple Usage

```js
import React, { Component } from 'react'
import { MapPropsToContext, MapContextToProps } from 'react-ctx'

const Text = ({foo}) => <div>{foo}</div>

export default class App extends Component {
  render() {
    return (
      // foo is added to props
      <MapPropsToContext foo={'bar'}>
        {/* foo is pulled from context and passed to Text as a prop */}
        <MapContextToProps foo>
          <Text />
        </MapContextToProps>
      </MapPropsToContext>
    )
  }
}
```

### `Provider` / `connect`-style Usage

```js
import React, { Component } from 'react'
import { MapPropsToContext, context } from 'react-ctx'

const contextTypes = {
  foo: PropTypes.string,
}

const MyProvider = ({foo}) => <MapPropsToContext foo={foo} contextTypes={contextTypes} />
const myConnect = () => context(contextTypes)
```

### PropTypes

You can use PropTypes for validation.

```js
import React, { Component, PropTypes } from 'react'
import { MapPropsToContext, MapContextToProps } from 'react-ctx'

const Text = ({foo}) => <div>{foo}</div>

const contextTypes = {
  foo: PropTypes.string,
}

export default class App extends Component {
  render() {
    return (
      // foo is added to props and its type is checked
      <MapPropsToContext
        foo={'bar'}
        contextTypes={contextTypes}
      >
        {/* all props described by contextTypes are grabbed from context and put into props */}
        <MapContextToProps contextTypes={contextTypes}>
          <Text />
        </MapContextToProps>
      </MapPropsToContext>
    )
  }
}
```

### Namespaces

```js
import React, { Component } from 'react'
import { MapPropsToContext, MapContextToProps } from 'react-ctx'

const Text = ({foo}) => <div>{foo}</div>

export default class App extends Component {
  render() {
    return (
      // yolo.foo is added to context
      <MapPropsToContext
        foo={'bar'}
        contextNamespace={'yolo'}
      >
        {/* yolo.foo is added to props as foo */}
        <MapContextToProps
          foo
          contextNamespace={'yolo'}
        >
          <Text />
        </MapContextToProps>
      </MapPropsToContext>
    )
  }
}
```

### Wrapping Custom Components

```js
import React, { Component } from 'react'
import { context, setContext } from 'react-ctx'

const contextTypes = {
  foo: PropTypes.string,
}

@setContext(contextTypes, 'namespace')
class FooProvider extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

@context(contextTypes, 'namespace')
class Text extends Component {
  render() {
    return <div>{this.props.foo}</div>
  }
}

export default class App extends Component {
  render() {
    return (
      // namespace.foo is added to context
      <FooProvider foo={'bar'}>
        {/* namespace.foo is added to props as foo */}
        <Text />
      </FooProvider>
    )
  }
}
```
