export default (props, { mediaQuery }) => ({
  tabsWrapper: {
    borderBottom: '2px solid #F7F7F7'
  },

  tabList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  quote: {
    marginTop: '3em',
    marginBottom: '3em',
    fontFamily: '"Merriweather", serif',
    borderLeft: '2px solid #000',
    paddingLeft: '2em',
    fontSize: '1.35em',
    lineHeight: '1.7em',
    maxWidth: '30rem',
    fontWeight: 400,
    fontStyle: 'italic',
    [mediaQuery('sm', 'max-width')]: {
      display: 'none'
    }
  }
})
