import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GameListModel } from '../models/gameList.model';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {userId} = body 
    const result = await GameListModel.get(userId)

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            result
        })
    }
};
