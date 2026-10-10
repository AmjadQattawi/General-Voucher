const inputStyles =
  "focus:outline-none border border-slate-300 hover:border-orange-300 focus:ring-1 ring-orange-600 transition px-4 py-2.5 rounded-xl bg-white text-sm";

export default function Inputs() {
  return (
    <div className="xl:col-span-3 space-y-6   ">

      {/* div between (l+r) and buttom inputs(Security Level +  Notes) */}
      <div className="space-y-4  bg-white p-5 rounded-2xl">
        {/* inputs left and right */}
        <div className="grid grid-cols-2 gap-4">
          {/* inputs left (1) */}
          <div className="flex flex-col gap-4">   
            {/* Voucher Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="Voucher Number" className="font-semibold text-sm">
                Voucher Number
              </label>
              <input
                type="number"
                id="Voucher Number"
                className={inputStyles}
              />
            </div>

            {/* Branch code */}
            <div className="flex flex-col gap-1">
              <label htmlFor="Branch code" className="font-semibold text-sm">
                Branch code
              </label>
              <select
                id="Branch code"
                name="Branch code"
                className={inputStyles}
              >
                <option value="Branch 1">Branch 1</option>
                <option value="Branch 2">Branch 2</option>
                <option value="Branch 3">Branch 3</option>
              </select>
            </div>
          </div>

          {/* inputs right {2} */}
          <div className="flex flex-col gap-4">
            {/* Automatic number */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Automatic number"
                className="font-semibold text-sm"
              >
                Automatic number
              </label>
              <input
                type="text"
                disabled
                readOnly
                defaultValue="1797"
                id="Automatic number"
                className={inputStyles}
              />
            </div>

            {/* Voucher Date */}
            <div className="flex flex-col gap-1">
              <label htmlFor="Voucher Date" className="font-semibold text-sm">
                Voucher Date
              </label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                id="Voucher Date"
                className={inputStyles}
              />
            </div>
          </div>
        </div>

        {/* inputs in the middle */}
        {/* Security Level */}
        <div className="flex flex-col gap-1">
          <label htmlFor="Security Level" className="font-semibold text-sm">
            Security Level
          </label>
          <select
            id="Security Level"
            name="Security Level"
            className={inputStyles}
          >
            <option value="Low">🟢 Low confidentiality</option>
            <option value="Medium">🟠 Medium confidentiality</option>
            <option value="High">🔴 High confidentiality</option>
          </select>
        </div>
        {/* Notes */}
        <div className="flex flex-col gap-1">
          <label htmlFor="Notes" className="font-semibold text-sm">
            Notes
          </label>
          <textarea id="Notes" rows={2} className={inputStyles} />
        </div>

        {/* end inputs */}
      </div>
    </div>
  );
}
