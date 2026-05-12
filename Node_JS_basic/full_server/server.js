import router from './routes/index'
import express from 'express'
const app = express()
const port = 1245

app.use(router)

app.listen(1245, 'localhost')

export default app