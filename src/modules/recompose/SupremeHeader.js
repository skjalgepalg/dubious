import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, compose, withProps } from 'recompose'
import onClickOutside from 'react-onclickoutside'

const SUPREME_SOURCE = 'https://avatars2.githubusercontent.com/u/430645?s=400&v=4'
const PLAIN_SOURCE = 'https://avatars3.githubusercontent.com/u/2345608?s=460&v=4'

const SupremeHeader = ({
  isSupremeLeader,
  handleClick,
}) =>
  <header className='App-header'>
    <figure>
      <img
        src={isSupremeLeader
          ? SUPREME_SOURCE
          : PLAIN_SOURCE}
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

SupremeHeader.propTypes = {
  isSupremeLeader: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default compose(
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
