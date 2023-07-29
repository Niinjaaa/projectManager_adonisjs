import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

    async show({ view }: HttpContextContract)
    {
        const user = await User.all()
        return view.render('users/show', {
            user
        });
    }

    
}
