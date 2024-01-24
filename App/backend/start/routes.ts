import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  // Route.get('/items', 'ListPokemonsController.index');
  // Route.get('/skill', 'ListPokemonsController.index');
  Route.get('/version', 'VersionsController.index');
}).prefix('/api');
