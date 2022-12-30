import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { GameList } from '../entities/gameList';
import { GameListModel } from '../models/gameList.model';

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event.body ?? '')
    console.log('body: ', body)
    const {userId, gamesId} = body 

    const gameListEntity: GameList = {
        userId,
        gamesId
    }

    const gameList = await GameListModel.create(gameListEntity)

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            gameList
        })
    }
};