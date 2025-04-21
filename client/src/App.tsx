import { Button } from "./components/Buttons"
import { PlusIcon } from "./icons/plusIcon"
function App() {
  return (
    <>
    <Button variant="primary" size="lg" text="share" startIcon={<PlusIcon/>}/>    
    <Button variant="secondary" size="lg" text="share" startIcon={<PlusIcon/>} />    
    </>
  )
}

export default App
