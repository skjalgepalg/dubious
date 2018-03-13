import React from 'react'
import PropTypes from 'prop-types'

const Header = props =>
  <header className='App-header'>
    <figure>
      <img
        src={props.logo}
        className='App-logo'
        alt='Much img'
      />
    </figure>
    <h1 className='App-title'>Skjalg, sitter hos TFF, React 15 og gode intensjoner...</h1>
  </header>

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default Header
