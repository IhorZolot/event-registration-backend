import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import eventRouter from './routes/api/events-routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', eventRouter)

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({ message: err.message })
})

export default app
