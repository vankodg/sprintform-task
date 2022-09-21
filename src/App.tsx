import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {result.map((transaction) => (
          <div>{transaction.summary}</div>
        ))}
      </div>
    </div>
  );
}
