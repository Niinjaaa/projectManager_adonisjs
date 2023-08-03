import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
    public async show({ view}: HttpContextContract)
    {
        const tasks = await Task.all()

        return view.render('tasks.show', {
            tasks
        })
    }

    public async create({ view }: HttpContextContract)
    {
        return view.render('tasks.create')
    }

    public async store({ response, session, request }: HttpContextContract)
    {
        Task.create({
            name: request.input('name'),
            description: request.input('description'),
            project_id: request.input('project_id'),
        })

        session.flash({ success: 'La tache à été créer'})
        return response.redirect().toRoute('tasks.show')
    } 

    public async edit({ params, view }: HttpContextContract)
    {
        const tasks = await Task.findOrFail(params.id)

        return view.render('tasks.edit', {
            tasks
        })
    }

    public async update({ params, request, response, session }: HttpContextContract)
    {
        const tasks = await Task.findOrFail(params.id)
        tasks.name = request.input('name')
        tasks.description = request.input('description')
        tasks.project_id = request.input('project_id')

        tasks.save()

        session.flash({ success: 'La tache à été supprimé' })
        return response.redirect().toRoute('tasks.show')
    }

    public async delete({ params, response, session }: HttpContextContract)
    {
        const tasks = await Task.findOrFail(params.id)
        tasks.delete()

        session.flash({ success: 'La tache à été supprimé'})
        return response.redirect().toRoute('tasks.show')
    }
}
