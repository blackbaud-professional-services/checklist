import React from 'react'
import withStyles from 'constructicon/with-styles'
import ConstructiconHeading from 'constructicon/heading'
import styles from './styles'

const Heading = ({ styles, children, ...props }) => (
  <ConstructiconHeading
    styles={styles.root}
    {...props}
  >
    {children}
  </ConstructiconHeading>
)

export default withStyles(styles)(Heading)
