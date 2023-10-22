import { useState } from "react";

function App() {
  const [formStem, setFormStep] = useState<number>(1);

  return (
    <main className="h-screen w-full">
      <div className="container mx-auto">Form</div>
    </main>
  );
}

export default App;
