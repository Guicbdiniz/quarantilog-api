import { Router, Request } from 'express'
import { DB } from '../controllers/mongodbController'

const router = Router()

router.post('/', function (req, res) {
	try {
		const dailyUpdate = new DB.Models.DailyUpdate({
			author: req.body.author,
			date: req.body.date,
			message: req.body.message
		})

		dailyUpdate.save((err) => {
			if (err) {
				res.status(400).json({ resulst: 'failure' })
			} else {
				res.status(200).json({ resulst: 'success' })
			}
		})
	} catch (e) {
		res.status(400).send(e.message)
	}
})

export default router
