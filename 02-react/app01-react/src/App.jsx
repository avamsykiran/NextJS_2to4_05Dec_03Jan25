import { Fragment } from 'react';
import Header from './ui/Header';
import Counter from './ui/Counter';
import CounterFn from './ui/CounterFn';

const App = () => (
  <Fragment>
    <Header title="First React App" />
    <section className='container-fluid p-4'>
      <h3>My First React Js App</h3>
      <p>This is a Simgle Page Application powered by ReactJS</p>

      <div className='row'>
        <Counter />
        <CounterFn />
      </div>
    </section>
  </Fragment>
);

export default App;