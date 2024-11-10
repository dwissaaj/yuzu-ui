import {
  useEffect,
  useRef,
} from "https://esm.sh/v135/preact@10.22.0/compat/src/index.js";

import SelectGroup from "./inputs/select/select-field/SelectGroup.tsx";

export default function Wrapper() {
  const fieldsetRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the fieldset ref is assigned properly
    if (fieldsetRef.current) {
      console.log("Fieldset ref is working:", fieldsetRef.current);
    } else {
      console.log("Fieldset ref is not working.");
    }
  }, []);

  return (
    <>
      <div class={"w-full flex flex-col gap-2"}>
        <SelectGroup classNames={{
          yuzuBase: "bg-red-500"
        }}  label={'fav fruits'} description="what is your liked">
        <option name={'fruits'}>orange</option>
        <option name={'fruits'}>apple</option>
        </SelectGroup>
        
       
      </div>
    </>
  );
}


// <div className={`opacity-50`}>
// <div className={"bg-red-500"}>
//   <legend>What is your favorite</legend>
//   <small>the most you eat</small>
// </div>
// <div className={"bg-red-500"}>
//   <select disabled={true} className={"bg-red-500"}>
//     <option>orange</option>
//     <option>apple</option>
//   </select>
// </div>
// </div>