import { FC } from "react";
import TransactionForm from "../components/TransactionForm";
import { instance } from "../api/axios.api";
import { Category } from "../types/types";
import { toast } from "react-toastify";
import TransactionTable from "../components/TransactionTable";

export const TransactionLoader = async () => {
  const categories = await instance.get<Category[]>("/categories");
  const transactions = await instance.get("/transactions");

  const data = {
    categories: categories.data,
    transactions: transactions.data,
  };

  return data;
};

export const TransactionAction = async ({ request }: any) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const newTransaction = {
        title: formData.get("title"),
        amount: +formData.get("amount"),
        category: formData.get("category"),
        type: formData.get("type"),
      };
      await instance.post("/transactions", newTransaction);
      toast.success("Transaction added successfully");
      return null;
    }
    case "DELETE": {
      const formData = await request.formData();
      const transactionId = formData.get("id");
      await instance.delete(`/transactions/transaction/${transactionId}`);
      toast.success("Deleted successfully");
      return null;
    }
  }
};

const Transactions: FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-4 items-start">
        <div className="grid col-span-2">
          <TransactionForm />
        </div>
        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="uppercase text-md font-bold text-center">
                Total Income:
              </p>
              <p className="bg-green-600 p-1 rounded-sm text-center mt-2">
                1000$
              </p>
            </div>
            <div>
              <p className="uppercase text-md font-bold text-center">
                Total Expense:
              </p>
              <p className="bg-red-600 p-1 rounded-sm text-center mt-2">
                1000$
              </p>
            </div>
          </div>
          <>Chart</>
        </div>
      </div>

      <h1 className="my-5">
        <TransactionTable />
      </h1>
    </>
  );
};

export default Transactions;
