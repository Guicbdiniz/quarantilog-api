import express, { Errback } from 'express'
import cors from 'cors'
import dailyUpdateRoutes from './routes/DailyUpdatesRoutes'

const app = express()
const port = 3002
app.use(cors())
app.use(express.json())
app.use('/dailyupdate', dailyUpdateRoutes)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, (err: Errback) => {
	if (err) {
		return console.log(err)
	}
	return console.log(`Server is listening on ${port}.`)
})
