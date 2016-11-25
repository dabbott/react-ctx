import React, { Component, PropTypes } from 'react'

import { context, setContext, ContextProvider } from '../dist/react-context'

const Text = context(
  ['color', 'fontSize', 'textDecoration']
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

const Setter = setContext(['color'])(class extends Component {
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
      >
        <ContextProvider fontSize={100}>
          <Setter color='teal'>
            <Text>Hola</Text>
            <TextWithContextTypes>World</TextWithContextTypes>
          </Setter>
        </ContextProvider>
      </ContextProvider>
    )
  }
}

export default App
