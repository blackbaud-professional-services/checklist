import React from 'react'
import withStyles from 'constructicon/with-styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from './styles'
import EmojIcon from '../EmojIcon'

const Tab = ({
  classNames,
  checklist,
  name,
  id,
  icon,
  onClick,
  active
}) => {
  const listItems = checklist.filter(item => item.category === id)

  const total = listItems.length
  const completed = listItems.filter(({ checked }) => !!checked).length

  const allComplete = total !== 0 && total === completed

  return (
    <div
      onClick={onClick}
      className={classNames.tab}
    >
      <EmojIcon name={allComplete ? 'check' : icon} />
      <span className={classNames.text}> {name}</span>
      <span className={classNames.text}> {completed}/{total}</span>
    </div>
  )
}

const mapStateToProps = ({ checklist }) => ({ checklist })

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(Tab)
