import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const IncrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const IncrementHandlerBy10 = () => {
    dispatch({ type: 'increase', amount: 10 });
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncrementHandlerBy10}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
