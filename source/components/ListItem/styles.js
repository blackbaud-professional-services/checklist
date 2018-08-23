export default ({ checked }, { mediaQuery }) => ({
  root: {
    color: checked ? '#0C871F' : 'black',
    userSelect: 'none',
    borderTop: '2px solid #F7F7F7',
    ':hover': {
      background: checked ? '#F7FDF7' : '#FCFCFC'
    }
  },

  strike: {
    textDecoration: checked ? 'line-through' : 'none'
  },

  clickable: {
    cursor: 'pointer'
  },

  examples: {
    paddingTop: '1em',
    paddingBottom: '2em',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },

  example: {
    width: 'calc(50% - 0.5em)',
    position: 'relative'
  },

  checkbox: {
    cursor: 'pointer',
    padding: '1.5em 1.5em 1.5em 0'
  },

  exampleText: {
    position: 'absolute',
    right: '1em',
    top: '1em'
  },

  exampleImage: {
    width: '100%'
  },

  helpSection: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  description: {
    color: 'black',
    paddingTop: '1em',
    paddingBottom: '1em',
    maxWidth: '30em'
  },

  helpLink: {
    position: 'relative',
    padding: '1.5em',
    cursor: 'pointer',
    color: 'black',
    display: 'inline-block'
  },

  text: {
    [mediaQuery('lg', 'max-width')]: {
      display: 'none'
    }
  },

  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})
