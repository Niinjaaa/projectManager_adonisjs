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

    public async create({ view }: HttpContextContract)
    {
        return view.render('project/create')
    }
    
    public async store({ request, response, session}: HttpContextContract)
    {
        Project.create({
            name: request.input('name'),
            description: request.input('description'),
            deadLine: request.input('deadLine')
        })
        session.flash({success: 'Le projet à été créer avec succès'})
        return response.redirect().toRoute('project.show')
        
    }

    public async edit({ view, params }: HttpContextContract)
    {
        let project = await Project.find(params.id)

        return view.render('project/edit', {
            project
        })
    }

    public async update({ request, params, session, response }: HttpContextContract)
    {
        let project = await Project.findOrFail(params.id)
        project.name = request.input('name')
        project.description = request.input('description')
        project.deadLine = request.input('deadLine')

        session.flash({succes: 'Le projet à été modifié'})
        project.save()

        return response.redirect().toRoute('project.show')

        /*const project = await Project.findOrFail(params.id)
        project.merge(request.all()).save()

        session.flash({succes: 'Le projet à été modifié'})
        return response.redirect().toRoute('project.show')*/
    }
    
    public async delete({ response, params, session }: HttpContextContract)
    {
        const projet = await Project.find(params.id)
        projet?.delete() 
        
        session.flash({success: 'Le projet à été supprimé'})
        return response.redirect().toRoute('project.show')
    }
}
