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
    }
}

export const GameGenre = dynamoose.model(
    'GameGenre',
    new Schema(schema, {
        saveUnknown: true,
        timestamps: true
    })
)
