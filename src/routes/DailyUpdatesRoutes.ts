import { Router, Request } from 'express'
import { DB } from '../controllers/mongodbController'

const router = Router()

/**
 * POST endpoint to the DailyUpdate route.
 * It is used to create a new DailyUpdate document from the DailyUpdate model.
 * Resquest params:
 * 		author: String -> the DailyUpdate author.
 * 		date: String -> the DailyUpdate creation date.
 * 		message: String -> the DailyUpdate message.
 * JSON reponse format:
 * 		result: String -> message telling if the request worked as planned.
 */
router.post('/', function (req, res) {
	try {
		const dailyUpdate = new DB.Models.DailyUpdate({
			author: req.body.author,
			date: req.body.date,
			message: req.body.message
		})

		dailyUpdate.save((err) => {
			if (err) {
				res.status(400).json({ result: 'failure' })
			} else {
				res.status(200).json({ result: 'success' })
			}
		})
	} catch (e) {
		res.status(400).json({ result: 'failure' })
	}
})

/**
 * GET endpoint to the DailyUpdate route.
 * It is used to get all the DailyUpdates documents saved in the MongoDB.
 * It uses the DailyUpdate model.
 * JSON response format:
 * 		results: List -> list of all DailyUpdates documents.
 */
router.get('/', function (req, res) {
	try {
		DB.Models.DailyUpdate.find((err, results) => {
			res.status(200).json({ results: results })
		})
	} catch (e) {
		res.status(400).json({ result: 'failure' })
	}
})

export default router
