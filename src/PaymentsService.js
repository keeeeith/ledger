const PaymentsService = {
  payments: [
    { description: "Payment", amount: 25.0 },
    { description: "Payment", amount: 65.0 },
  ],

  getPayments() {
    return Promise.resolve([...this.payments]);
  },

  makePayment(amount) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.payments.push({ description: "Payment", amount });
        resolve();
      }, 1000);
    });
  },
};

export { PaymentsService };
