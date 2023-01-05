import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { User } from '../entities/user'
import { UserModel } from '../models/user.model'

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log('event: ', JSON.stringify(event))
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {userId, name} = body 
    const user = {
        id: userId,
        name
    } as User

    const createdUser = await UserModel.create({
        ...user
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            user: createdUser
        })
    }
};