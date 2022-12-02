import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { Game } from '../entities/game';
import { GameGenre } from '../models/genre.model';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {name} = body 
    const gameGenre = {
        name
    } as Game

    const result = await GameGenre.create({
        ...gameGenre
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            result
        })
    }
};