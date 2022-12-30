import dynamoose, { Schema } from 'dynamoose'

const schema = {
    userId: {
        type: String,
        required: true,
        hashKey: true
    },
    gamesId: {
        type: Array,
        required: true
    }
}

export const GameListModel = dynamoose.model(
    'GameList',
    new Schema(schema, {
        saveUnknown: true,
        timestamps: true
    })
)
