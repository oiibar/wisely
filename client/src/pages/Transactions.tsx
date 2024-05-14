import { FC } from "react";
import TransactionForm from "../components/TransactionForm";

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

      <h1 className="my-5">Table</h1>
    </>
  );
};

export default Transactions;
