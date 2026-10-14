import InputForm, { inputStyles } from "../../input/InputForm";

export default function VoucherForm() {
  return (
    <div className="bg-white pb-4 rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* Inputs Body */}
      <div className="p-5 space-y-4">
        {/* Top 4 Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Voucher Date */}
          <InputForm
            label="Voucher Date"
            type="date"
            id="voucher-date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />

          {/* Voucher Number */}
          <InputForm
            label="Voucher Number"
            type="number"
            id="voucher-number"
            placeholder="e.g. 1024"
          />

          {/* Automatic number */}
          <InputForm
            label="Automatic number"
            type="text"
            id="auto-number"
            disabled
            readOnly
            defaultValue="1797"
            className="bg-slate-100/80 text-slate-500 cursor-not-allowed hover:border-slate-300"
          />

          {/* Security Level (select)*/}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="security-level" className="font-medium  ">
              Security Level
            </label>
            <select
              id="security-level"
              name="security-level"
              className={inputStyles}
            >
              <option value="Low">🟢 Low confidentiality</option>
              <option value="Medium">🟠 Medium confidentiality</option>
              <option value="High">🔴 High confidentiality</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="notes" className="font-medium ">
            Notes
          </label>
          <textarea
            id="notes"
            rows={2}
            placeholder="Add voucher description or reference details..."
            className={inputStyles}
          />
        </div>
      </div>
    </div>
  );
}
