function App() {
  return (
    <div className="App">
      <form>
        <label>Title</label>
        <input type="text" />
        <label>Amount</label>
        <input type="number" />
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

export default App;
