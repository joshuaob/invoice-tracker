import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveInvoice(invoice, amount, date) {
      if (invoice.get("id") === null) {
        invoice.set("id", Date.now());
        this.get("model").pushObject(invoice);
      }

      invoice.set("amount", amount);
      invoice.set("date", date);
    },

    deleteInvoice(invoice) {
      let objIndex = this.get("model").findIndex((obj => obj.id == invoice.id));
      this.get("model").removeAt(objIndex);
    }
  }
});
