export default (props, { mediaQuery }) => ({
  root: {
    '.chrome-picker': {
      boxShadow: 'none !important',
      border: '2px solid #F7F7F7',
      '> div': {
        borderRadius: '0 !important'
      }
    }
  },

  pickers: {
    paddingTop: '2em',
    width: '50%',
    display: 'flex',
    paddingBottom: '2em',
    [mediaQuery('sm', 'max-width')]: {
      display: 'block'
    }
  },

  pickerWrapper: {
    paddingRight: '1em'
  },

  pickerTitle: {
    paddingBottom: '1em'
  },

  result: {
    padding: '1em',
    width: '100%',
    border: '2px solid #F7F7F7'
  },

  resultWrapper: {
    paddingBottom: '2em'
  },

  checks: {
    padding: '2em 0 1em',
    '> span': {
      paddingRight: '1em'
    }
  }
})
