import Actions from "./Actions";
import Inputs from "./Inputs";

export default function InputsAndActions() {
  return (
    // all body
    <div className="space-y-6">
      {/* all top section (left(inputs) + right(actions)) */}
      <div className=" grid grid-cols-1 xl:grid-cols-4 gap-6  ">
          {/*  Left col (inputs) */}
          <Inputs/>

        {/* rigth col  (2) */}
        <Actions/>


      </div>
    </div>
  );
}
