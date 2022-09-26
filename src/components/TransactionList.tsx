import { Card, Container, Stack } from "react-bootstrap";
import { Transaction, Category, Currency } from "../types";
import Moment from "moment";

type TransactionListProps = {
  transactions: Transaction[];
};

function CategoryIcon(category: Category): string {
  let icon = "✨";
  switch (category) {
    case "housing":
      icon = "🏘️";
      break;
    case "travel":
      icon = "✈️";
      break;
    case "food":
      icon = "🍲";
      break;
    case "utilities":
      icon = "🔌";
      break;
    case "insurance":
      icon = "🛡️";
      break;
    case "healthcare":
      icon = "🏥";
      break;
    case "financial":
      icon = "💲";
      break;
    case "lifestyle":
      icon = "🕶️";
      break;
    case "entertainment":
      icon = "📽️";
      break;
    default:
      icon = "✨";
  }
  return icon;
}

function CurrencySign(currency: Currency): string {
  if (currency === "HUF") {
    return "Ft";
  } else {
    return currency;
  }
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <Container>
      {transactions.map((transaction) => (
        <Card key={transaction.id} style={{ marginTop: "1em" }}>
          <Stack direction="horizontal">
            <div style={{ fontSize: "2em", margin: "0.5em" }}>
              {CategoryIcon(transaction.category)}
            </div>
            <Stack
              style={{ justifyContent: "center", alignItems: "flex-start" }}
            >
              <div style={{ fontWeight: "600" }}>{transaction.summary}</div>
              <div style={{ fontSize: "0.8em" }}>
                {Moment(transaction.paid).format("YYYY. MM. DD.")}
              </div>
            </Stack>
            <div
              style={{
                fontSize: "1.5em",
                margin: "auto 0.5em",
                fontWeight: "bold",
              }}
            >
              {transaction.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              {CurrencySign(transaction.currency)}
            </div>
          </Stack>
        </Card>
      ))}
    </Container>
  );
}
