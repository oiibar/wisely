import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { Form, useLoaderData } from "react-router-dom";
import { ResponseTransactionLoader } from "../types/types";
import { formatDate } from "../helpers/date.helper";
import { formatCurrency } from "../helpers/currency.helper";

const TransactionTable: FC = () => {
  const { transactions } = useLoaderData() as ResponseTransactionLoader;
  console.log(transactions);

  return (
    <>
      <div className="bg-slate-800 px-4 py-3 mt-4 rounded-md">
        <table className="w-full">
          <thead>
            <tr>
              <td className="font-bold">№</td>
              <td className="font-bold">Title</td>
              <td className="font-bold">Amount</td>
              <td className="font-bold">Category</td>
              <td className="font-bold">Date</td>
              <td className="text-right">Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{transaction.title}</td>
                <td
                  className={
                    transaction.type == "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {transaction.type == "income"
                    ? `+  ${formatCurrency.format(transaction.amount)}`
                    : `-  ${formatCurrency.format(transaction.amount)}`}
                </td>
                <td>{transaction.category?.title || "Other"}</td>
                <td>{formatDate(transaction.created_at)}</td>
                <td>
                  <Form method="DELETE" action="/transactions">
                    <input type="hidden" name="id" value={transaction.id} />
                    <button className="btn hover:btn-red ml-auto">
                      <FaTrash />
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
