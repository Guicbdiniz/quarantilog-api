import express, { Errback } from 'express'
import cors from 'cors'
import dailyUpdateRoutes from './routes/DailyUpdatesRoutes'

const app = express()
const port = 3002

// API middlewares.
app.use(cors())
app.use(express.json())

// API routes.
app.use('/dailyupdate', dailyUpdateRoutes)

/**
 * Start listening in the selected port for API calls.
 */
app.listen(port, (err: Errback) => {
	if (err) {
		return console.log(err)
	}
	return console.log(`Server is listening on ${port}.`)
})
