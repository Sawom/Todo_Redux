//  redux e 3ta jinish connect kora lagbe
// create store
// 1. store connect with react app by provider. zeta main.tsx e ache
// 2. create slice. slice connect with store
// 3. slice connect with store er reducer

// ** dispatch
//  dispatch er jnno 2ta hook ache. 
// selector er kaj consume kora, dispatch er kaj send kora 
// useDispatch er moddhe ze action gula create korchilam. ekhane increment, decrement


import { Button } from "./components/ui/button"
import Todo from "./pages/Todo"


function App() {

  return (
    <>
      <Todo></Todo>
    </>
  )
}

export default App
