import app from './src/app'
import { PORT } from './src/config/env.config'
import dbConnect from './src/config/mongo.config'

const port = PORT || 4000

dbConnect().then(() => {
  app.listen(port, () => {
    console.log('Listening on port %s', port)
  })
})
