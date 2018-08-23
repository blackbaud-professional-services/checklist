export default ({ active }, { mediaQuery }) => ({
  tab: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: '0.9em',
    textAlign: 'center',
    flex: 1,
    padding: '1em',
    borderBottom: `2px solid ${active ? 'black' : 'transparent'}`,
    ':hover': {
      background: '#FCFCFC'
    }
  },

  text: {
    [mediaQuery('md', 'max-width')]: {
      display: 'none'
    }
  }
})
