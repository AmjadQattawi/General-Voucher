
const handleKeyDown = (e: React.KeyboardEvent<HTMLTableSectionElement>) => {
  if (e.key === "Enter") {
    e.preventDefault(); // منع إرسال الفورم عند ضغط Enter

    // جمع كل عناصر الإدخال داخل الجدول التي تحمل الكلاس voucher-input
    const inputs = Array.from(
      e.currentTarget.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
        ".voucher-input"
      )
    );

    const currentIndex = inputs.indexOf(e.target as any);

    // إذا وجد الحقل الحالي ولم نكن في الحقل الأخير، انقل المؤشر للتالي
    if (currentIndex !== -1 && currentIndex + 1 < inputs.length) {
      inputs[currentIndex + 1].focus();
    }
  }
};

export default function Table() {
  return (
    <div className="bg-white p-5 rounded-2xl overflow-x-auto ">
      <table className="w-full text-left ">
        <thead className="bg-slate-50 text-xs font-semibold text-slate-700 border-b border-slate-200">
          <tr>
            <th className=" py-3 px-4 w-12 text-center">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
              />
            </th>
            <th className="py-3 px-4">Debit</th>
            <th className="py-3 px-4">Credit</th>
            <th className="py-3 px-4">Account</th>
            <th className="py-3 px-4">Currency</th>
            <th className="py-3 px-4">Rate</th>
            <th className="py-3 px-4">Due Date</th>
            <th className="py-3 px-4">Cost Center</th>
            <th className="py-3 px-4">Description</th>
          </tr>
        </thead>

        <tbody onKeyDown={handleKeyDown} className="divide-y divide-slate-100">
          <tr>
            {/* checkbox */}
            <td className="py-2 px-3 w-12 text-center">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
              />
            </td>

            {/* Debit */}
            <td className="py-2 px-3 w-36">
              <input
                type="number"
                step="any"
                defaultValue="0.0000"
                className="voucher-input  w-full  font-mono px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
              />
            </td>

            {/* Credit */}
            <td className="py-2 px-3 w-36">
              <input
                type="number"
                step="any"
                defaultValue="0.0000"
                className="voucher-input w-full  font-mono px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
              />
            </td>

            {/* Account */}
            <td className="py-2 px-3 min-w-40">
              <select
                className="voucher-input w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-700 cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Account...
                </option>
                <option value="10101">10101 - Cash in Hand</option>
                <option value="10201">10201 - Main Bank</option>
                <option value="40101">40101 - Sales Revenue</option>
                <option value="50101">50101 - Office Supplies</option>
              </select>
            </td>

            {/* Currency */}
            <td className="py-2 px-3 min-w-27">
              <select
                defaultValue="JOD"
                className="voucher-input w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-700 cursor-pointer"
              >
                <option value="JOD">JOD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SAR">SAR</option>
              </select>
            </td>

            {/*  Rate  */}
            <td className="py-2 px-3 w-33">
              <input
                type="number"
                step="any"
                defaultValue="1.0000"
                className="voucher-input w-full text-right font-mono px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
              />
            </td>

            {/*  Due Date  */}
            <td className="py-2 px-3 min-w-33">
              <input
                type="date"
                className="voucher-input w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-700"
              />
            </td>

            {/* 8. Cost Center */}
            <td className="py-2 px-3 min-w-37">
              <div className="flex items-center gap-1.5">
                <select
                  defaultValue=""
                  className="voucher-input w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-slate-700 cursor-pointer"
                >
                  <option value="">None</option>
                  <option value="CC-01">IT Department</option>
                  <option value="CC-02">Administration</option>
                  <option value="CC-03">Sales Team</option>
                </select>

                <button
                  type="button"
                  title="Add Cost Center"
                  className="p-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600 text-slate-500 transition cursor-pointer shrink-0"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </td>

            <td className="py-2 px-3 min-w-55">
              <input
                type="text"
                placeholder="Line description..."
                className="voucher-input w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder:text-slate-400"
              />
            </td>
          </tr>
        </tbody>

        {/* end table */}
      </table>
    </div>
  );
}
