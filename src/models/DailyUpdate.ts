import { Schema, model, Document, Model } from 'mongoose'

/**
 * Daily Update interface.
 * The Daily Update is basically a text I can write everyday.
 */
declare interface IDailyUpdate extends Document {
	author: String
	date: String
	message: String
}

/**
 * Daily Update Model Interface.
 * Models are basically fancy constructors from Schema definitions.
 * They are used to create and read documents from a MongoDB database.
 */
export interface DailyUpdateModel extends Model<IDailyUpdate> {}

/**
 * Daily Update Class.
 * It represents a MongoDB collection (as every Schema does).
 */
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

	/**
	 * Gets the DailyUpdate model.
	 */
	public get model(): Model<IDailyUpdate> {
		return this._model
	}
}
