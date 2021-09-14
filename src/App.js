import { connect } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { decrementAction, incrementAction } from './actions'

// mapStateToProps is a function returning an object
// the keys of this object are going to be the props of your component

// the state parameter is the REDUX STATE
// const mapStateToProps = (state) => ({
//   ingrid: state.count,
// })
const mapStateToProps = (state) => state
// mapStateToProps is necessary for READING values out of the redux store

// mapDispatchToProps is a function returning an object
// every key of mapDispatchToProps is going to be a prop of App
const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(incrementAction()),
  decreaseCounter: () => dispatch(decrementAction()),
})

function App({ count, increaseCounter, decreaseCounter }) {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="success" onClick={() => increaseCounter()}>
          +
        </Button>
        <h1>COUNT VALUE IS: {count}</h1>
        <Button variant="danger" onClick={() => decreaseCounter()}>
          -
        </Button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// for reading and dispatching actions from a component, you'll need to CONNECT IT!
// the connect function can connect a component just in read-mode, or also in write-mode
// first argument: mapStateToProps -> provide the parts of the redux store you want your component to receive as props
// second argument: mapDispatchToProps -> provide your component with props able to dispatch actions
