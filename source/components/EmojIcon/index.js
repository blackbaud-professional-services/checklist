import React from 'react'
import withStyles from 'constructicon/with-styles'
import styles from './styles'

const emojis = {
  down: '🔽',
  left: '◀️',
  paperclip: '📎',
  link: '🔗',
  circle: '⚪️',
  check: '✅',
  ruler: '📐',
  swords: '⚔️',
  pretzel: '🥨',
  bat: '🏓',
  repeat: '🔁',
  computer: '🖥',
  ok: '👌',
  seeNoEvil: '🙈',
  eyes: '👀',
  cross: '❌',
  skull: '☠️',
  paintbrush: '🖌',
  palette: '🎨',
  shrug: '🤷‍♀️',
  no: '🙅‍♀️'
}

const EmojIcon = ({ name, classNames }) => (
  <span className={classNames.root}>
    {emojis[name]}
  </span>
)

export default withStyles(styles)(EmojIcon)
