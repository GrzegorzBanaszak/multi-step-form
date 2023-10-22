// import { useState } from "react";
import StepsList from "./components/StepsList";
import Nav from "./components/Nav";
import Step1 from "./components/Step1";

function App() {
  // const [formStem, setFormStep] = useState<number>(1);

  return (
    <main className="min-h-screen w-screen bg-gray-300/30 lg:h-screen">
      <div className="container mx-auto h-full">
        <div className="w-full lg:h-full flex justify-center items-center">
          <div className="flex flex-col lg:flex-row w-full lg:w-auto lg:p-4 lg:bg-white lg:rounded-md">
            {/* sidebar */}
            <div>
              <div className="w-full h-[172px] bg-sidebarMobile bg-no-repeat bg-cover lg:bg-sidebarDesktop lg:h-[568px] lg:w-[274px] ">
                <StepsList />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="w-[70wv] mx-4 py-6 px-4 rounded-md bg-white relative -top-[60px] lg:top-0 lg:mx-0 lg:px-20 lg:flex-1">
                <Step1 />
              </div>
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
