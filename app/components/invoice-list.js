import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
     $('.modal').modal();
  },
  invoicesFilteredByDate: computed('invoices.@each.amount', 'filteredDate', function () {
    if (this.get("filteredDate")) {
      return this.get("invoices").filter(item => {
        return item.date === this.get("filteredDate");
      })
    } else {
      return this.get("invoices");
    }
  }),
  invoicesTotal: computed("invoices.@each.amount", "invoicesFilteredByDate", function() {
    if (this.get("filteredDate")) {
      return this.get("invoicesFilteredByDate").mapBy('amount').reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    } else {
      return this.get("invoices").mapBy('amount').reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    }
  }),
  actions: {
    showInvoiceForm(invoice) {
      if (invoice) {
        this.set("currentInvoice", invoice);
      } else {
        this.set("currentInvoice", EmberObject.create({id: null, amount: 0, date: null}))
      }
      $('#invoice-form').modal("open");
    },

    deleteInvoice(invoice) {
      this.get("deleteInvoice")(invoice);
    }
  }
});
