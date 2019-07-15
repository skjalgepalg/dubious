import React from 'react'
import PropTypes, { func, bool } from 'prop-types'
import { withState, withHandlers, compose, withProps, setPropTypes } from 'recompose'
import onClickOutside from 'react-onclickoutside'

const SUPREME_SOURCE = 'https://avatars2.githubusercontent.com/u/430645?s=400&v=4'
const PLAIN_SOURCE = 'https://avatars3.githubusercontent.com/u/2345608?s=460&v=4'

// Javascript function hoisting -> proptypes first <3
NamedHeader.propTypes = {
  handleClick: func,
  isSupremeLeader: bool,
}

// Named function
function NamedHeader({ handleClick, isSupremeLeader }) {
  return (
    <header className='App-header'>
      <figure>
        <img
          src={isSupremeLeader ? SUPREME_SOURCE : PLAIN_SOURCE}
          className='App-logo'
          alt='supremeheader'
          onClick={handleClick}
        />
      </figure>
      <h1 className='App-title'>
        {isSupremeLeader
          ? 'Best practices'
          : 'Dubious React practices'
        }
      </h1>
    </header>
  )
}


// Anonymous function (unngå, men oooh so ES6 and modern)
const SupremeHeader = ({
  handleClick,
  isSupremeLeader,
  ...props
}) =>
  <header className='App-header'>
    <figure>
      <img
        {...props}
        src={isSupremeLeader ? SUPREME_SOURCE : PLAIN_SOURCE}
        className='App-logo'
        alt='supremeheader'
        // onChange={(e) => { model.name = e.target.value }}
        // Avoid creating new closures in the render method- use methods like below
        onClick={handleClick}
      />
    </figure>
    <h1 className='App-title'>
      {isSupremeLeader
        ? 'Best practices'
        : 'Dubious React practices'
      }
    </h1>
  </header>

const passthroughPropTypes = {
  snerk: PropTypes.string,
}

SupremeHeader.propTypes = {
  // ...passthroughPropTypes, // <- kjempeproblem
  handleClick: PropTypes.func,
  isSupremeLeader: PropTypes.bool,
}

export default compose(
  setPropTypes(passthroughPropTypes),
  withState('isSupremeLeader', 'setIsSupremeLeader', false),
  withHandlers({
    handleClick: ({ isSupremeLeader, setIsSupremeLeader }) => e => {
      e.preventDefault()
      setIsSupremeLeader(!isSupremeLeader)
    },
    handleClickOutside: state => e => {
      e.preventDefault()
      state.setIsSupremeLeader(false)
    },
  }),
  withProps(ownProps => ({
    disableOnClickOutside: !ownProps.isSupremeLeader,
  })),
  onClickOutside,
)(SupremeHeader)
// )(NamedHeader)
