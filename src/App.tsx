import { useState } from "react";
import StepsList from "./components/StepsList";
import Nav from "./components/Nav";
import Step1 from "./components/Step1";

function App() {
  const [formStem, setFormStep] = useState<number>(1);

  return (
    <main className="min-h-screen w-screen bg-gray-300/30">
      <div className="container mx-auto h-full">
        <div className="w-full h-full">
          {/* sidebar */}
          <div className="w-full h-[200px] bg-sidebarMobile bg-no-repeat bg-cover">
            <StepsList />
          </div>
          <div className="w-[70wv] mx-4 py-6 px-4 rounded-md bg-white relative -top-[100px]">
            <Step1 />
          </div>
          <Nav />
        </div>
      </div>
    </main>
  );
}

export default App;
