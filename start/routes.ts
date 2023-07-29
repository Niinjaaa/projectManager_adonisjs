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

// Route projet 
Route.get('/project', 'ProjectsController.show').as('project.show')
Route.post('/project/store', 'ProjectsController.store').as('project.store')
Route.get('/project/create', 'ProjectsController.create').as('project.create')
Route.get('/project/edit', 'ProjectsController.edit').as('project.edit')