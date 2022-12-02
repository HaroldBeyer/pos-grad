import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GameRatingModel } from '../models/gameRating.model';
import { GameRating } from '../entities/gameRating'
import { Game } from '../entities/game';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {genre, name} = body 
    const gameRating = {
        genre,
        name
    } as Game

    const result = await GameRatingModel.create({
        ...gameRating
    })

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            result
        })
    }
};