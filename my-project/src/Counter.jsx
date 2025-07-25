import { useState } from 'react';

function Counter(props) {
  const [count, SetCount] = useState(0);

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h2 className="mb-4">Counter {props.name}</h2>
          <h1>{count}</h1>
          <div className="btn-group">
            <button className="btn btn-outline-danger" onClick={() => SetCount(count - 1)}>-</button>
            <button className="btn btn-outline-success" onClick={() => SetCount(0)}>Reset</button>
            <button className="btn btn-outline-primary" onClick={() => SetCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
