import React from 'react'
import { ChromePicker } from 'react-color'
import withStyles from 'constructicon/with-styles'
import styles from './styles'
import EmojIcon from '../EmojIcon'
import { hex } from 'wcag-contrast'

class ContrastChecker extends React.Component {
  constructor () {
    super()

    this.state = {
      color: '#0000FF',
      backgroundColor: '#FFFFFF'
    }
  }

  handleColorPick ({ hex }, type) {
    this.setState({
      [type]: hex
    })
  }

  render () {
    const { classNames } = this.props
    const { color, backgroundColor } = this.state

    const contrastRatio = Math.round((
      hex(color, backgroundColor)
    ) * 100) / 100

    const AA = contrastRatio >= 4.5
    const AAA = contrastRatio >= 7
    const AALarge = contrastRatio >= 3
    const AAALarge = contrastRatio >= 4.5

    return (
      <div className={classNames.root}>
        <div className={classNames.pickers}>
          <div className={classNames.pickerWrapper}>
            <div className={classNames.pickerTitle}>Text Color</div>
            <ChromePicker
              color={color}
              disableAlpha
              onChangeComplete={e => this.handleColorPick(e, 'color')}
            />
          </div>

          <div className={classNames.pickerWrapper}>
            <div className={classNames.pickerTitle}>Background Color</div>
            <ChromePicker
              color={backgroundColor}
              disableAlpha
              onChangeComplete={e => this.handleColorPick(e, 'backgroundColor')}
            />
          </div>
        </div>

        <div className={classNames.resultWrapper}>

          <div className={classNames.checks}>
            <span><EmojIcon name={AA ? 'check' : 'cross'} /> AA</span>
            <span><EmojIcon name={AAA ? 'check' : 'cross'} /> AAA</span>
          </div>

          <div
            className={classNames.result}
            style={{
              color,
              backgroundColor
            }}
          >
            Regular text - The contrast ratio for these colors is {contrastRatio}:1
          </div>

          <div className={classNames.checks}>
            <span><EmojIcon name={AALarge ? 'check' : 'cross'} /> AA</span>
            <span><EmojIcon name={AAALarge ? 'check' : 'cross'} /> AAA</span>
          </div>

          <div
            className={classNames.result}
            style={{
              fontSize: '1.5em',
              fontWeight: '600',
              color,
              backgroundColor
            }}
          >
            Large text - The contrast ratio for these colors is {contrastRatio}:1
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ContrastChecker)
