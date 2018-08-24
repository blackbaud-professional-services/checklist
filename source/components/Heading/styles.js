import merge from 'lodash/merge'

export default ({ styles }, { mediaQuery }) => ({
  root: merge({
    fontSize: '1.5em',
    fontFamily: 'inherit',
    lineHeight: '1.3em',
    fontWeight: '400',
    [mediaQuery('sm')]: {
      fontSize: '2.5em',
    }
  }, styles)
})
