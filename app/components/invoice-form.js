import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  closeModal() {
    $('#invoice-form').modal("close");
  },

  actions: {
    saveInvoice() {
      this.get("saveInvoice")(this.get("currentInvoice"), this.get("currentInvoice.amount"), this.get("currentInvoice.date"));
      this.closeModal();
    }
  }
});
