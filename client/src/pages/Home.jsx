import React from "react";

function Home() {
  return (
    <div>
      <form>
        <label>Title</label>
        <input type="text" />
        <label>Amount</label>
        <input type="number" />
        <select>
          <option value="salary">Salary</option>

          <option value="rent">Rent</option>

          <option value="shop">Shop</option>
        </select>
        <label>
          <input type="radio" />
          Income
        </label>
        <br />
        <label>
          <input type="radio" />
          Expense
        </label>
        <button>Submit</button>
      </form>
      <div>
        <p>Total income: </p>
        <p>Total expense: </p>
      </div>
    </div>
  );
}

export default Home;
