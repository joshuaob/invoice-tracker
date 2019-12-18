import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Integration | Component | invoice-list', function(hooks) {
  setupRenderingTest(hooks);
  const INVOICES = [
    EmberObject.create({ id: 1, amount: 150, date: "2019-12-12" }),
    EmberObject.create({ id: 2, amount: 230, date: "2019-12-14" })
  ];

  test('should filter by date when present', function(assert) {
    const invoiceList = this.owner.lookup('component:invoice-list');
    invoiceList.set("invoices", INVOICES);
    invoiceList.set("filteredDate", "2019-12-12");
    assert.equal(invoiceList.get('invoicesFilteredByDate').length, 1);
  });

  test('should return all invoices when date filter is not present', function(assert) {
    const invoiceList = this.owner.lookup('component:invoice-list');
    invoiceList.set("invoices", INVOICES);
    assert.equal(invoiceList.get('invoicesFilteredByDate').length, 2);
  });
});
