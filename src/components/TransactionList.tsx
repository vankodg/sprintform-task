export default function TransactionList(transactions) {
  return (
    <div>
      Transactions
      <div>
        {transactions.map((transaction) => (
          <div>{transaction.summary}</div>
        ))}
      </div>
    </div>
  );
}
