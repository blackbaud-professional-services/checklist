import { createServer } from 'boiler-room-runner'
import renderDocument from 'constructicon/lib/renderDocument'
import createStore from './store'
import routes from './routes'

const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    renderDocument,
    routes,
    createStore,
    assets
  })

  app.staticRoutes = [
    '/'
  ]

  return app
}

export { renderDocument }
