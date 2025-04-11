import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
// import { add, mult, sub, divide as div } from './utils/math'

const bottlesPromise = fetch('/public/bottles.json').then(res => res.json());

function App() {
  // const divide = 4/2;
  // const sum = add(4,5);
  // const subt = sub(4,5);
  // const mul = mult(3,3);
  // const division = div(3,2);

  // console.log(sum, subt, mul, division);

  return (
    <>
      
      <h1>Awesome water bottles.</h1>
      <Suspense fallback={<h2>Loading bottles....</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
