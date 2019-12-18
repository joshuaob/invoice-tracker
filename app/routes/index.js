import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return [
      EmberObject.create({ id: 1, amount: 150, date: "2019-12-12" }),
      EmberObject.create({ id: 2, amount: 230, date: "2019-12-14" })
    ]
  },
  setupController(controller, model){
    controller.set('model', model);
  }
});
