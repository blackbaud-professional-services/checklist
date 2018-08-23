import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

const emojis = [
  '😵',
  '😭',
  '😖',
  '😩',
  '☹️',
  '😬',
  '😧',
  '😢',
  '🙁',
  '😕',
  '😳',
  '🙄',
  '😐',
  '🙂',
  '😊',
  '😎',
  '😀',
  '😄',
  '😁',
  '😍'
]

const HappySad = ({ checklist }) => {
  const a = checklist.filter(item => item.checked === true).length
  const b = checklist.length

  const percent = (a / b) * 100

  const emojiIndex = Math.round(percent / (100 / (emojis.length - 1)))
  const emoji = emojis[emojiIndex]

  const title = `${emoji} ${a}/${b}`

  return (
    <div>
      <Helmet title={`${title} — Design Checklist`} />
      <div>
        <span style={{
          display: 'inline-block',
          fontSize: '30px',
          position: 'relative',
          paddingRight: '0.2em',
          top: '0.2em'
        }}>{emoji}</span>
        <span style={{
          display: 'inline-block',
          width: '4em'
        }}>&nbsp;{a}/{b}</span>
      </div>
    </div>
  )
}

const mapStateToProps = ({ checklist }) => ({ checklist })

export default connect(mapStateToProps)(HappySad)
