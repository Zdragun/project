import { useState, useEffect } from 'react';

function App() {
  const [hello,setHello] =useState("")
  
useEffect(() => {
  setHello("Hello Word")
}, [])



  return (
    <div>
      {hello}
    </div>
  );
}

export default App;
