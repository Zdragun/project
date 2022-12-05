import { useState } from 'react';

function App() {
  const [hello,setHello] =useState("Hello Word")
  return (
    <div>
      {hello}
    </div>
  );
}

export default App;
