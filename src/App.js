// Structure imports -fight me!
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import './App.css'
import logo from './logo.svg'
import Header from './components/Header'
import Intro from './components/Intro'
import SupremeHeader from './modules/recompose/SupremeHeader'
import GeoPosition from './modules/properties/GeoPosition'

const Home = () =>
  <div className='App'>
    <header className='App-header'>
      <img
        src={logo}
        className='App-logo'
        alt='Wow such logo'
      />
      <h1 className='App-title'>Various React practices</h1>
    </header>

    <p className='App-intro'>
      Tilgi oss, for vi vet ikke hva vi gjør
    </p>
  </div>

const Components = () =>
  <div className='App'>
    <Header logo='https://avatars3.githubusercontent.com/u/2345608?s=460&v=4' />
    <Intro />
  </div>

const Recompose = () =>
  <React.Fragment>
    <div className='App'>
      <SupremeHeader/>
    </div>
    <pre>
      {`melding: {
        meldingId: 123,
        vedlegg: [],
      }`}
    </pre>
    <pre>
      {`const Melding = ({ meldingId, ...props }) =>
      <div>
        {meldingId}
        <Vedlegg vedlegg={props.vedlegg} />
      <div>`}
    </pre>
    <pre>
      {`class Melding extends React.Component {
        render() {
          const { meldingId, ...props } = this.props
          return (
            <div>
              {meldingId}
              Vedlegg vedlegg={props.vedlegg} />
            </div>
          )
        }
      }`}
    </pre>
  </React.Fragment>

const RenderProps = () =>
  <div className='App'>
    <GeoPosition
      render={state => (
        <div className='App-header'>
          <h1 className='App-logo App-intro'>
            Lat: {state.lat || '...'} Long: {state.lng || '...'}
          </h1>
        </div>
      )}
    />
  </div>

const Latskap = () =>
  <div className='App'>

    <Intro />
  </div>

const App = () =>
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Intro</Link></li>
        <li><Link to='/components'>Containers / Components</Link></li>
        <li><Link to='/recompose'>Recompose</Link></li>
        <li><Link to='/renderprops'>Render props</Link></li>
        <li><Link to='/latskap'>Latskap og skippertak</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/components' component={Components} />
      <Route path='/recompose' component={Recompose} />
      <Route path='/renderprops' component={RenderProps} />
      <Route path='/latskap' component={Latskap} />
    </div>
  </Router>

export default App
