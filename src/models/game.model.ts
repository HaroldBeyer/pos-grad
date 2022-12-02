import { randomUUID } from 'crypto'
import dynamoose, { Schema } from 'dynamoose'

const schema = {
    id: {
        type: String,
        required: true,
        hashKey: true,
        default: randomUUID()
    },
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    }
}

export const GameModel = dynamoose.model(
    'Game',
    new Schema(schema, {
        saveUnknown: true,
        timestamps: true
    })
)
