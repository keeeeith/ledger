import React, { useState, useEffect } from "react";
import { PaymentsService } from "./PaymentsService.js";
import "./App.css";

function App() {
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  function fetchPayments() {
    PaymentsService.getPayments().then((res) => setPayments(res));
  }

  async function makePayment() {
    setPayment("");
    setIsSubmitting(true);
    await PaymentsService.makePayment(payment);
    setIsSubmitting(false);
    fetchPayments();
  }

  function handleSubmit(e) {
    e.preventDefault();
    makePayment();
  }

  return (
    <React.Fragment>
      {payments.map(({ amount, description }) => (
        <p key={amount}>
          {description} {amount}
        </p>
      ))}

      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setPayment(e.target.value)} value={payment} />
        <input type="submit" />
        {isSubmitting && (
          <small style={{ display: "block" }}>Submitting...</small>
        )}
      </form>
    </React.Fragment>
  );
}

export default App;
