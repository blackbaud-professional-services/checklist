export default (props, { rhythm, mediaQuery }) => ({
  root: {
    transform: 'translateZ(0)',
    transition: 'all 1s ease',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'white',
    zIndex: 1
  },

  inner: {
    padding: rhythm(),
    margin: '0 auto',
    width: '100%',
    maxWidth: rhythm(40),
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  text: {
    [mediaQuery('sm', 'max-width')]: {
      display: 'none'
    }
  }
})
