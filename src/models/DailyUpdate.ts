import { Schema, model, Document, Model } from 'mongoose'

declare interface IDailyUpdate extends Document {
	author: String
	date: String
	message: String
}

export interface DailyUpdateModel extends Model<IDailyUpdate> {}

export class DailyUpdate {
	private _model: Model<IDailyUpdate>

	constructor() {
		const schema = new Schema({
			author: { type: String, required: false },
			date: { type: String, required: true },
			message: { type: String, required: true }
		})

		this._model = model<IDailyUpdate>('DailyUpdate', schema)
	}

	public get model(): Model<IDailyUpdate> {
		return this._model
	}
}
