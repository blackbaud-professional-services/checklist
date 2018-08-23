import merge from 'lodash/merge'

export default ({ styles }, traits) => ({
  root: merge({
    fontSize: '2.5em',
    fontFamily: 'inherit',
    lineHeight: '1.3em',
    fontWeight: '400'
  }, styles)
})
