import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";

type Category =
  | "housing"
  | "travel"
  | "food"
  | "utilities"
  | "insurance"
  | "healthcare"
  | "financial"
  | "lifestyle"
  | "entertainment"
  | "miscellaneous";

type Currency = "HUF" | string;

type Transaction = Readonly<{
  id: number;
  summary: string;
  category: Category;
  sum: number;
  currency: Currency;
  paid: Date;
}>;

export default function App() {
  const [result, setResult] = useState<Transaction[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://development.sprintform.com/transactions.json",
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
  }, []);

  return (
    <div className="App">
      <Header />
      <Page />
      <div>
        {result.map((transaction) => (
          <div>{transaction.summary}</div>
        ))}
      </div>
    </div>
  );
}
