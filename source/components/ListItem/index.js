import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'constructicon/with-styles'
import Container from 'constructicon/container'
import styles from './styles'
import EmojIcon from '../EmojIcon'

import ContrastChecker from '../../components/ContrastChecker'

import {
  setComplete,
  setIncomplete
} from '../../store/checklist'

const components = {
  ContrastChecker
}

class ListItem extends React.Component {
  constructor () {
    super()

    this.state = {
      showExapmle: false
    }
  }

  onActionClick (key) {
    return (e) => {
      e.stopPropagation()
      this.setState({
        [key]: !this.state[key]
      })
    }
  }

  render () {
    const {
      setComplete,
      setIncomplete,
      classNames,
      title,
      checked,
      description,
      examples = {},
      component,
      id
    } = this.props

    const {
      showExample
    } = this.state

    const onClick = () => {
      if (checked) setIncomplete(id)
      else setComplete(id)
    }

    const Component = components[component]

    return (
      <div className={classNames.root}>
        <Container width={40} spacing={{x: 1}}>
          <div className={classNames.flex}>
            <div onClick={onClick} className={classNames.checkbox}>
              <EmojIcon name={checked ? 'check' : 'circle'} />
              <span className={classNames.strike}> {title}</span>
            </div>
            <div className={classNames.helpSection}>
              <span
                onClick={this.onActionClick('showExample')}
                className={classNames.helpLink}
              >
                <EmojIcon
                  name={showExample ? 'seeNoEvil' : 'eyes'}
                />&nbsp;
                <span className={classNames.text}>Example</span>
              </span>
            </div>
          </div>
          {showExample && (
            <div>
              <div className={classNames.description}>
                {description}
              </div>
              {!component && (
                <div className={classNames.examples}>
                  <div className={classNames.example}>
                    <span className={classNames.exampleText}>
                      <EmojIcon name='check' />
                    </span>
                    <img
                      className={classNames.exampleImage}
                      src={examples.yes}
                    />
                  </div>
                  <div className={classNames.example}>
                    <span className={classNames.exampleText}>
                      <EmojIcon name='cross' />
                    </span>
                    <img
                      className={classNames.exampleImage}
                      src={examples.no}
                    />
                  </div>
                </div>
              )}
              {component && <Component />}
            </div>
          )}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  setComplete,
  setIncomplete
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(ListItem)
