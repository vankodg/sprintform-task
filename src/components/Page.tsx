import { useEffect, useState } from "react";
import { Transaction } from "../types";
import FilterArea from "./FilterArea";
import TransactionList from "./TransactionList";

export default function Page() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://development.sprintform.com/transactions.json",
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setTransactions(jsonData);
    };

    api();
  }, []);

  return (
    <>
      <FilterArea />
      <TransactionList transactions={transactions} />
    </>
  );
}
