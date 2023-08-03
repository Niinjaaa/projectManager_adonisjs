/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
 
// Route users 
Route.get('/users', 'UsersController.show').as('users.show')
Route.post('/users/store', 'UsersController.store').as('users.store')
Route.get('/users/create', 'UsersController.create').as('users.create')
Route.get('/users/edit/:id', 'UsersController.edit').as('users.edit')
Route.put('users/:id', 'UsersController.update').as('users.update')
Route.delete('users/:id', 'UsersController.delete').as('users.delete')

// Route projet 
Route.get('/project', 'ProjectsController.show').as('project.show')
Route.get('/project/create', 'ProjectsController.create').as('project.create')
Route.post('/project/store', 'ProjectsController.store').as('project.store')
Route.get('/project/edit/:id', 'ProjectsController.edit').as('project.edit')
Route.put('project/:id', 'ProjectsController.update').as('project.update')
Route.delete('project/:id', 'ProjectsController.delete').as('project.delete')

// Route tasks 
Route.get('/tasks', 'TasksController.show').as('tasks.show')
Route.get('/tasks/create', 'TasksController.create').as('tasks.create')
Route.post('/tasks/store', 'TasksController.store').as('tasks.store')
Route.get('/tasks/edit/:id', 'TasksController.edit').as('tasks.edit')
Route.put('tasks/:id', 'TasksController.update').as('tasks.update')
Route.delete('tasks/:id', 'TasksController.delete').as('tasks.delete')

// Route teams
Route.get('/teams', 'TeamsController.show').as('teams.show')
Route.get('/teams/create', 'TeamsController.create').as('teams.create')
Route.post('/teams/store', 'TeamsController.store').as('teams.store')
Route.get('/teams/edit/:id', 'TeamsController.edit').as('teams.edit')
Route.put('teams/:id', 'TeamsController.update').as('teams.update')
Route.delete('teams/:id', 'TeamsController.delete').as('teams.delete')