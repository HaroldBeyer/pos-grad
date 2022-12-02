import { randomUUID } from 'crypto'
import dynamoose, { Schema } from 'dynamoose'

// type GameRatingDataSchema = GameRating
// type GameRatingKeySchema = Pick<GameRating, 'id'>

const schema = {
    id: {
        type: String,
        required: true,
        hashKey: true,
        default: randomUUID()
    },
    userId: {
        type: String,
        required: true,
    },
    gameId: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}

export const GameRatingModel = dynamoose.model(
    'GameRating',
    new Schema(schema, {
        saveUnknown: true,
        timestamps: true
    })
)
