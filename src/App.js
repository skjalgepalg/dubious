import React from 'react'
import './App.css'
// 1: Rydd opp
// import Header from './components/Header'
// 2: Recompose
// import SupremeHeader from './modules/recompose/SupremeHeader'
// 3: properties og proptypes
// 4: Latskap og vedlikehold
// Incoming

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () =>
  <div className='App'>
    {/* <header className='App-header'>
      <img
        src='https://avatars3.githubusercontent.com/u/2345608?s=460&v=4'
        className='App-logo'
        alt='Wow such logo'
      />
      <h1 className='App-title'>Various React practices</h1>
    </header> */}
    {/* <Header /> */}
    {/* <SupremeHeader /> */}
    <p className='App-intro'>
      Tilgi oss ikke, for vi vet noenlunde hva vi driver med
    </p>
  </div>

export default App
