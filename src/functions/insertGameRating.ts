import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GameRatingModel } from '../models/gameRating.model';
import { GameRating } from '../entities/gameRating'

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {userId, gameId, rating, comment} = body 
    const gameRating = {
        comment,
        gameId,
        rating,
        userId
    } as GameRating

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