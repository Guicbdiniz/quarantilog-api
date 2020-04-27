import { connect, connection, Connection } from 'mongoose'
import { DailyUpdate, DailyUpdateModel } from '../models/DailyUpdate'

declare interface IModels {
	DailyUpdate: DailyUpdateModel
}

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

	public static get Models() {
		if (!DB.instance) {
			DB.instance = new DB()
		}

		return DB.instance._models
	}

	private showConnectedMessage() {
		console.log('Mongoose has connected')
	}

	private showErrorMessage(error: any) {
		console.log('Mongose has errored\n', error)
	}
}
