import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectsController {

    public async show({ view }: HttpContextContract)
    {
        const project = await Project.all()
        return view.render('project/show', {
            project
        })
    }

    public async store({request, response}: HttpContextContract)
    {
        Project.create({
            name: request.input('name'),
            description: request.input('description'),
            deadLine: request.input('deadLine')
        })
        
        return response.redirect().toRoute('project.show')
    }

    public async create({ view }: HttpContextContract)
    {
        return view.render('project/create')
    }

    public async edit({ view }: HttpContextContract)
    {
        return view.render('project/edit')
    }

    public async delete({ response }: HttpContextContract, id)
    {
        const project = await Project.find(id)
        project?.delete()

        return response.redirect().toRoute('project.show')
    }
}
