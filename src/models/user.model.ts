import dynamoose, { Schema } from 'dynamoose'

const schema = {
    id: {
        type: String,
        required: true,
        hashKey: true,
    },
    name: {
        type: String,
        required: true,
    }
}

export const UserModel = dynamoose.model(
    'User',
    new Schema(schema, {
        saveUnknown: true,
        timestamps: true
    })
)
