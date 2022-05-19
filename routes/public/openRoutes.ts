import {Express, Request, Response} from 'express';
import {userCreate} from '../../controllers/users';

function openRoutes(app:Express) {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send({
            'message':'🏃‍♂️ Server is running 🏃‍♂️'})
    })

    app.post('/user/create', (req: Request, res: Response) => {
        userCreate(req, res);
    })
}

export default openRoutes;