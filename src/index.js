import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


/**
 想請問在還沒在加入eslint之前，VS code會自動補上分號、該空白的空白

但是eslint加入之後

ReactDOM.render(<App / >, document.getElementById('root'))

重新compiling會變成
ReactDOM.render( < App / > , document.getElementById('root'))
結果就出現eslint警告了 囧

 */
