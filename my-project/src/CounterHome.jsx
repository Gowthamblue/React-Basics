import Counter from "./Counter";

function CounterHome() {
  return (
    <>
      <h1 className="text-center mb-5">🔢 Multi Counter</h1>
      <div className="d-flex justify-content-center gap-3">
        <Counter name=" 1" />
        <Counter name=" 2" />
        <Counter name=" 3" />
      </div>
    </>
  );
}

export default CounterHome;
