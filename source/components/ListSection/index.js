import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'constructicon/with-styles'
import Container from 'constructicon/container'
import styles from './styles'
import Tab from '../Tab'
import ListItem from '../ListItem'

class ListSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.categories[0].id
    }
  }

  setActiveTab (activeTab) {
    if (activeTab !== this.state.activeTab) {
      this.setState({ activeTab })
    }
  }

  render () {
    const {
      classNames,
      categories,
      checklist
    } = this.props

    const { activeTab } = this.state

    const activeTabContent = categories.find(tab => (
      tab.id === activeTab
    ))

    return (
      <div>
        <div className={classNames.tabsWrapper}>
          <Container width={40} spacing={{t: 3, x: 1}}>
            <div className={classNames.tabList}>
              {categories.map(tab =>
                <Tab
                  onClick={() => this.setActiveTab(tab.id)}
                  active={activeTab === tab.id}
                  {...tab}
                />
              )}
            </div>
          </Container>
        </div>

        <Container width={40} spacing={{y: 3, x: 1}}>
          <div className={classNames.quote}>
            {activeTabContent.description}
          </div>
        </Container>

        <div>
          {checklist.filter(item => (
            item.category === activeTab
          )).map(item => (
            <ListItem {...item} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ checklist, categories }) => ({
  checklist,
  categories
})

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(ListSection)
