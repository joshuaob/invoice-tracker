import Controller from '@ember/controller';

const invoices = [];

export default Controller.extend({
  actions: {
    getInvoices() {
      return invoices
    }
  }
});
