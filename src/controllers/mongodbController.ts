import { connect, connection, Connection } from 'mongoose'
import { DailyUpdate, DailyUpdateModel } from '../models/DailyUpdate'

/**
 * All DB's models interface.
 */
declare interface IModels {
	DailyUpdate: DailyUpdateModel
}

/**
 * Singleton class representing the connection to the MongoDB.
 * Usage:
 * 		Simply use the Models attribute to get the model to be used.
 * 		The model contains all the methods to act over the DB's documents.
 */
export class DB {
	private static instance: DB

	private _db: Connection
	private _models: IModels

	private constructor() {
		connect('mongodb://localhost:27017/quarantilog', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		this._db = connection
		this._db.on('open', this.showConnectedMessage)
		this._db.on('error', this.showErrorMessage)

		this._models = {
			DailyUpdate: new DailyUpdate().model
		}
	}

	/**
	 * Get all the DB related models.
	 */
	public static get Models() {
		if (!DB.instance) {
			DB.instance = new DB()
		}

		return DB.instance._models
	}

	/**
	 * Print a connection message to the console.
	 */
	private showConnectedMessage() {
		console.log('Mongoose has connected')
	}

	/**
	 * Print a connection error to the console.
	 *
	 * @param error - error message.
	 */
	private showErrorMessage(error: any) {
		console.log('Mongose has errored\n', error)
	}
}
