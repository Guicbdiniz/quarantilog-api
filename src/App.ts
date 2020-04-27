import express, { Errback } from 'express'
import cors from 'cors'

const app = express()
const port = 3002
app.use(cors)
app.use(express.json())

app.listen(port, (err: Errback) => {
	if (err) {
		return console.log(err)
	}
	return console.log(`Server is listening on ${port}.`)
})
