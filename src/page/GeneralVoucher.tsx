import Header from "../components/GeneralVoucher/Header";
import InputsAndActions from "../components/GeneralVoucher/Inputs&Actions";
import Table from "../components/GeneralVoucher/Table";

export default function GeneralVoucher() {
  return (
    // main div
    <main className="bg-[#F3F4F8] w-full min-h-screen py-6  ">
      {/* wrapper div */}
      <div className="max-w-7xl mx-auto px-4">
        {/* header */}
        <Header />

        {/* the grid that include 2 col (left + right) */}
          {/* left col (1)*/}
      <form className="space-y-6">
          <InputsAndActions />
          
      {/* table */}
      <Table />
      </form>

        {/* end wrapper div */}
      </div>
    </main>
  );
}
