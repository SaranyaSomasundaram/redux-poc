
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addname } from './Action';


function App() {

     const count = useSelector((state) => state.counter)
     const name = useSelector((state) => state.name)

     const dispatch = useDispatch();
     return (
          <>

               <h2>counter:{count}</h2>
               <h2>name:{name}</h2>
               <button onClick={() => dispatch(increment())}>INCREMENT</button>
               <button onClick={() => dispatch(decrement())}>DECREMENT</button>
               <button onClick={() => dispatch(addname(Math.random()))}>RANDOMNAME</button>
          </>
     )

}

export default App;









