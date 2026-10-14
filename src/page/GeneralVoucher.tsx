import { useState } from "react";
import Table from "../components/GeneralVoucher/Table/Table";
import VoucherActions from "../components/GeneralVoucher/VoucherActions";
import VoucherForm from "../components/GeneralVoucher/VoucherForm";
import VoucherHeader from "../components/GeneralVoucher/VoucherHeader";

export type VoucherStatus = "Draft" | "Posted"
export default function GeneralVoucher() {

  const [status, setStatus] = useState<VoucherStatus>("Draft");

  function handlePost() {
    setStatus("Posted");
  alert("Posted successfully!");
  setTimeout(() => {
    const newButton = document.getElementById("btn-new-entry");
    newButton?.focus();
  }, 0);
}

function handleUnPost(){
  setStatus("Draft");
  // alert("Unposteed successfully!");
}
  const isPosted = status === "Posted";

  return (
    <main className="bg-[#F3F4F8] w-full min-h-screen py-3 pb-16 ">
      {/* wrapper div */}
      <div className="max-w-8xl mx-auto px-20 ">
        <VoucherHeader status={status} isPosted={isPosted}/>

        <form className="space-y-5">
          <VoucherForm />

          <Table isReadOnly={isPosted} />

          <VoucherActions handlePost={handlePost} status={status} handleUnPost={handleUnPost} />
          
        </form>

        {/* end wrapper div */}
      </div>
    </main>
  );
}
