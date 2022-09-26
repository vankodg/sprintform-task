import { Dispatch, SetStateAction } from "react";
import { Card, Container, Form, Button } from "react-bootstrap";
import { Transaction } from "../types";

type FilterAreaProps = {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
};

export default function FilterArea({
  transactions,
  setTransactions,
}: FilterAreaProps) {
  const filterTransactions = async (e: any) => {
    const formData = new FormData(e),
      formDataObj = Object.fromEntries(formData.entries());
    const data = await fetch(
      "https://development.sprintform.com/transactions.json",
      {
        method: "GET",
      }
    );
    const allTransactions: Transaction[] = await data.json();
    if (formDataObj.category) {
      const filteredTransactions = allTransactions.filter(
        (transaction) => transaction.category === formDataObj.category
      );
      setTransactions(filteredTransactions);
    } else {
      setTransactions(allTransactions);
    }
  };

  return (
    <Container>
      <Card style={{ padding: "0.5em" }}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            filterTransactions(e.target);
          }}
        >
          <Form.Group className="mb-3" controlId="formGroupCategory">
            <Form.Label>Kategória</Form.Label>
            <Form.Select name="category">
              <option value="">Válassz kategóriát!</option>
              <option value="housing">🏘️ Housing</option>
              <option value="travel">✈️ Travel</option>
              <option value="food">🍲 Food</option>
              <option value="utilities">🔌 Utilities</option>
              <option value="insurance">🛡️ Insurance</option>
              <option value="healthcare">🏥 Healthcare</option>
              <option value="financial">💲 Financial</option>
              <option value="lifestyle">🕶️ Lifestyle</option>
              <option value="entertainment">📽️ Entertainment</option>
              <option value="miscellaneous">✨ Miscellaneous</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Szűrés</Button>
        </Form>
      </Card>
    </Container>
  );
}
