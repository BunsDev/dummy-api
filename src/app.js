const jsonServer = require('json-server')
const clone = require('clone')
const data = require('../data.json')

const app = jsonServer.create()
const router = jsonServer.router(clone(data), { _isFake: false })

app.use((req, res, next) => {
  if (req.path === '/') return next()
  router.db.setState(clone(data))
  next()
})

app.use(jsonServer.defaults({
  logger: process.env.NODE_ENV == 'production'
}))

app.use(router)

app.get('/', (_req, res) =>
  res.send(eta.render('index.html', { data: db.data })),
)

// app.get('/todos', (_req, res) =>
//   res.send(eta.render('index.html', { data: db.data })),
// )

// app.get('/:name', (req, res, next) => {
//   const { name = '' } = req.params
//   const query = Object.fromEntries(Object.entries(req.query)
//     .map(([key, value]) => {
//       if (['_start', '_end', '_limit', '_page', '_per_page'].includes(key) && typeof value === 'string') {
//         return [key, parseInt(value)]
//       } else {
//         return [key, value]
//       }
//     })
//     .filter(([_, value]) => !Number.isNaN(value))
//   )
//   res.locals['data'] = service.find(name, query)
//   next()
// })

module.exports = app