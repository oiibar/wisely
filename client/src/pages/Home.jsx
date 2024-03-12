import React, { useState } from "react";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex items-center justify-between px-20 text-white">
      <form className="flex items-center flex-col py-5">
        <div className="mb-3">
          <label
            for="title"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            class="bg-white border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-3">
          <label
            for="amount"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            class="bg-white border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label
            for="categories"
            class="text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            required
            id="categories"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Salary" selected>
              Salary
            </option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="flex mb-5">
          <div class="flex items-center mr-3">
            <input
              type="radio"
              onChange={handleRadioChange}
              value="Income"
              checked={selectedOption === "Income"}
              id="default-radio-1"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Income
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              onChange={handleRadioChange}
              checked={selectedOption === "Expense"}
              id="default-radio-2"
              value="Expense"
              name="default-radio-2"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Expense
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div>
        <p>Total income: </p>
        <p>Total expense: </p>
      </div>
    </div>
  );
}

export default Home;
