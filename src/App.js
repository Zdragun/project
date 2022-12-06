import { useState, useEffect } from 'react';

function App() {
  const [hello,setHello] =useState("")
  
useEffect(() => {
  setHello("Hello Word")
}, [])



  return (
    <div>
      {hello}
      learn react
    </div>
  );
}

export default App;
