import React, { useState } from "react";

class ClassCounter extends React.Component {
  // const [count, setCount] = useState(0);
  // в классовом компоненте хуки использовать нельзя

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    // зачем здесь 2 раза привязывается this?
    // потому что если ф-ии increment и decrement не стрелочные, то они теряют контекст класса, а
    // this.increment можно представить как имя переменной
    // this.increment = this.increment.bind(this); // без этого ф-я будет возвращать undefined
    // this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    // в классовом компоненте нельзя напрямую изменять состояние this.state.count += 1;
    this.setState({ count: this.state.count + 1 });
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  // необходим this, потому что мы внутри класса
  // нельзя писать this.count, потому что мы игнорируем состояние
  // нужно писать this.state.count
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
