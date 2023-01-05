import { GameModel } from '../models/game.model'
import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const games = await GameModel.scan().exec()

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            games
        })
    }
};
