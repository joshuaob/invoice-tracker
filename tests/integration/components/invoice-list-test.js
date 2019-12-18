import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import EmberObject from '@ember/object';

module('Integration | Component | invoice-list', function(hooks) {
  setupRenderingTest(hooks);
  const INVOICES = [
    EmberObject.create({ id: 1, amount: 150, date: "2019-12-12" }),
    EmberObject.create({ id: 2, amount: 230, date: "2019-12-14" })
  ];
  const FILTERED_INVOICES = [
    EmberObject.create({ id: 1, amount: 150, date: "2019-12-12" }),
  ];

  test('it shows all invoices', async function(assert) {
    this.set('invoices', INVOICES);
    this.render(hbs`
      {{invoice-list invoices=invoices}}
    `);

    return wait().then(() => {
      assert.equal(this.$('.collection-item').length, 2);
    });
  });

  test('it shows filtered invoices', async function(assert) {
    this.set('invoices', FILTERED_INVOICES);
    this.set('filteredDate', "2019-12-12");
    this.render(hbs`
      {{invoice-list invoices=invoices}}
    `);

    return wait().then(() => {
      assert.equal(this.$('.collection-item').length, 1);
    });
  });
});
