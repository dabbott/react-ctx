import React, { Component, PropTypes } from 'react'

import { context, setContext, ContextProvider } from '../dist/react-context'

// textDecoration should apply, fontSize shouldn't
const Text = context(
  ['fontSize', 'textDecoration'], 'yolo'
)(context(
  ['color'], 'namespace'
)(class extends Component {
  render() {
    const {color, fontSize, textDecoration} = this.props
    const style = {color, fontSize, textDecoration}

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}))

// Shouldn't be colored, since color is namespaced
const TextWithContextTypes = context(
  {color: PropTypes.string, fontSize: PropTypes.number, textDecoration: PropTypes.string}
)(class extends Component {
  render() {
    const {color, fontSize, textDecoration} = this.props
    const style = {color, fontSize, textDecoration}

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
})

const Setter = setContext(['color'], 'namespace')(class extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

class App extends Component {
  render() {
    return (
      <ContextProvider
        textDecoration={'underline'}
        childContextTypes={{textDecoration: PropTypes.string}}
        contextNamespace={'yolo'}
      >
        <ContextProvider fontSize={100}>
          <Setter color={'teal'}>
            <Text>Hola</Text>
            <TextWithContextTypes>World</TextWithContextTypes>
          </Setter>
        </ContextProvider>
      </ContextProvider>
    )
  }
}

export default App
