import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Game } from '../entities/game';
import { GameModel } from '../models/game.model';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {genre, name} = body 
    const game = {
        genre,
        name
    } as Game

    const result = await GameModel.create({
        ...game
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            result
        })
    }
};