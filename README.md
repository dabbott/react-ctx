react-context
=====================

[![npm version](https://img.shields.io/npm/v/react-context.svg?style=flat-square)](https://www.npmjs.com/package/react-context)

Higher order component for providing themes & styles to a React or React Native app.

```js
npm install --save react-context
```

## Usage

### Step 1: Provide the theme

Wrap the top level component, or any component whose descendants should be styled, in the `<StylesProvider>`. Pass a theme (an arbitrary value of your choosing) to this provider, which will be used to build styles.

The theme can be changed at any time and the styles will be recomputed for your entire app - but don't worry, styles are memoized per theme (themes are compared with `===`), so there isn't a big performance impact due to recomputing styles.

```js
import React, { Component } from 'react'
import { StylesProvider } from 'react-context'

// Themes can be any value (object, array, function, whatever)
const myTheme = {
  colors: {
    text: 'red',
    background: 'blue',
  },
  fonts: {
    regular: {
      fontSize: 13,
      fontFamily: "Helvetica",
    }
  }
}

// Any children of App will be able to use the provided theme
export default class App extends Component {
  render() {
    <StylesProvider theme={myTheme}>
      {this.props.children}
    </StylesProvider>
  }
}
```

### Step 2: Create your styles

```js
import React, { Component } from 'react'
import { Text } from 'react-native'
import { StylesEnhancer } from 'react-context'

// This function will be called whenever the theme changes
// to provide a `styles` prop to the component
const stylesCreator = (theme) => {
  const {colors, fonts} = theme

  return {
    main: {
      color: colors.text,
      ...fonts.regular,
    },
  }
}

// The prop `styles` will be available to this component,
// containing the object returned from the stylesCreator
@StylesEnhancer(stylesCreator)
export default class Foo extends Component {
  render() {
    const {styles} = this.props

    return <Text style={styles.main} />
  }
}
```

## Other / Advanced Usage

### Styles based on component `props`

```js
import React, { Component } from 'react'
import { Text } from 'react-native'
import { StylesEnhancer } from 'react-context'

const stylesCreator = (theme, data) => ({
  main: {
    color: data.type === 'main' ? 'green' : 'black',
    fontSize: data.type === 'warning' ? theme.warning : theme.regular,
  }
})

// Select data from props to be passed to the stylesCreator.
// The stylesCreator will only be called again if the object returned by this
// function changes (determined by shallow equality comparison)
const selectProps = (props) => ({
  type: props.type,
})

@StylesEnhancer(stylesCreator, selectProps)
export default class Foo extends Component {
  render() {
    const {styles} = this.props

    return <Text style={styles.main} />
  }
}
```

### Without Decorators

```js
import React, { Component } from 'react'
import { Text } from 'react-native'
import { StylesEnhancer } from 'react-context'

const stylesCreator = (theme) => { return ... }

class Foo extends Component {
  render() {
    const {styles} = this.props

    return <Text style={styles.main} />
  }
}

export default StylesEnhancer(stylesCreator)(Foo)
```