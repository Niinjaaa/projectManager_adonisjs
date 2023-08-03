import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'

export default class TeamsController {
    public async show({ view }: HttpContextContract)
    {
        const teams = await Team.all()

        return view.render('teams.show', {
            teams
        })  
    }

    public async create({ view }: HttpContextContract)
    {
        return view.render('teams.create')
    }

    public async store({ response, request, session }: HttpContextContract)
    {
        Team.create({
            name: request.input('name'),
            project_id: request.input('project_id'),
        })

        session.flash({ success: 'La team à été créer' })
        return response.redirect().toRoute('teams.show')
    }

    public async edit({ params, view }: HttpContextContract)
    {
        const teams = await Team.findOrFail(params.id)

        return view.render('teams.edit', {
            teams
        })
    } 

    public async update({ params, session, request, response }: HttpContextContract)
    {
        const teams = await Team.findOrFail(params.id)
        teams.name = request.input('name')
        teams.project_id = request.input('project_id')
        
        teams.save()
        session.flash({ success: 'La team à été modifié' })
        return response.redirect().toRoute('teams.show')
    }

    public async delete({ params, response }: HttpContextContract)
    {
        const teams = await Team.findOrFail(params.id)
        teams.delete()

        return response.redirect().toRoute('teams.show')
    }
}
