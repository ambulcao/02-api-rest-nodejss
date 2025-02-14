import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions'
<<<<<<< HEAD
  //prefix: 'transactions'
=======
>>>>>>> a7905b9c214c53b5962937c82dfd66c53585434d
})

app.listen({ 
  port: env.PORT,
  host: '0.0.0.0',
})
.then(() => {
  console.log('HTTP server running!')
})
.catch((err) => {
  console.error('Error starting server:', err)
  process.exit(1)
})
 