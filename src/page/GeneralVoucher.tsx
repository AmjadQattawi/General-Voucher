import Table from "../components/GeneralVoucher/Table/Table";
import VoucherActions from "../components/GeneralVoucher/VoucherActions";
import VoucherForm from "../components/GeneralVoucher/VoucherForm";
import VoucherHeader from "../components/GeneralVoucher/VoucherHeader";

export default function GeneralVoucher() {
  return (
    <main className="bg-[#F3F4F8] w-full min-h-screen py-3 pb-16 ">
      {/* wrapper div */}
      <div className="max-w-8xl mx-auto px-20 ">
        <VoucherHeader />

        <form className="space-y-5">
          <VoucherForm />

          <Table />

          <VoucherActions />
          
        </form>

        {/* end wrapper div */}
      </div>
    </main>
  );
}
