import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GameModel } from '../models/game.model';
import { GameRatingModel } from '../models/gameRating.model';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {gameId, userId} = body 

    let gameRating = await GameRatingModel.get({gameId});

    let rating = (gameRating?.rating + 1) ?? 0;

    if (!gameRating) {
        gameRating = await GameRatingModel.create({
            gameId,
            userId,
            rating
        });
    }
    
    const updateGameRating = await gameRating.update({
        gameId,
        rating,
        userId
    })
    
    const updateResultGame = await GameModel.update({
        gameId,
        rating
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            updateResultGame,
            gameRating,
            updateGameRating
        })
    }
};