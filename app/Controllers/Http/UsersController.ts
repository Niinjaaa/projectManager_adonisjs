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

    public async store({ request, response, session }: HttpContextContract)
    {
        User.create({
            name: request.input('name'),
            email: request.input('email'),
            password: request.input('password'),
        })

        session.flash({ success: 'L\'utilisateur à été créer'})
        return response.redirect().toRoute('users.show')
    }

    public async create({ view }: HttpContextContract)
    {
        return view.render('users/create')
    }

    public async edit({ params, view } : HttpContextContract)
    {
        const users = await User.find(params.id)

        return view.render('users.edit', {
            users
        })
    }

    public async update({ request, params, session, response } : HttpContextContract)
    {
        const users = await User.findOrFail(params.id)
        users.name = request.input('name')
        users.email = request.input('email')
        users.password = request.input('password')

        users.save()
        session.flash({ succes: 'L\'utilisateur à été modifié' })
        return response.redirect().toRoute('users.show')
    }

    public async delete({ response, params, session }: HttpContextContract)
    {
        const users = await User.find(params.id)
        users?.delete()

        session.flash({ success: 'L\'utilisateur à été supprimé'})
        return response.redirect().toRoute('users.show')
    }
}
