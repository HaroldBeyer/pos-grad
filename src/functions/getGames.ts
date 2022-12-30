import { GameModel } from '../models/game.model'
import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const result = await GameModel.scan()

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            result
        })
    }
};
