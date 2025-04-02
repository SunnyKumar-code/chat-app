import { Suspense ,lazy} from "react";
import React from "react";
const Cat = lazy(()=>import("../../components/Cat"))

const GeneralApp = () => {

  return (
    <>
    <Suspense fallback="Loading...">
<Cat/>
    </Suspense>
    
    </>
  );
};

export default GeneralApp;
