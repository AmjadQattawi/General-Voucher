import { NumericFormat } from "react-number-format";
import type { ITableData, IValidationError } from "../../../reducers/voucherTypes";

type TableRowProps = {
  row: ITableData;
  index: number;
  handleInputChange: (
    id: string,
    field: keyof ITableData,
    value: string | boolean,
  ) => void;
  validationError: IValidationError | null;
};

export default function TableRow({
  row,
  index,
  handleInputChange,
  validationError,
  
}: TableRowProps) {
  // const isDebitDisabled = parseFloat(row.Credit) > 0;
  // const isCreditDisabled = parseFloat(row.Debit) > 0;
  const isDibitAndCreditError = validationError?.rowId === row.id &&  validationError.field === "Debit&Credit";
  const isAllRequired =
    validationError?.rowId === row.id &&
    validationError?.field === "ALL_REQUIRED";
  const isDebitError =
    validationError?.rowId === row.id && validationError?.field === "Debit";
  // const isCreditError =
  //   validationError?.rowId === row.id && validationError?.field === "Credit";
  const isAccountError =
    validationError?.rowId === row.id && validationError?.field === "Account";
  return (
    <tr
      className={`divide-x divide-slate-200 ${
        index % 2 !== 0 ? "bg-slate-100" : "bg-white"
      }`}
    >
      {/* checkbox */}
      <td className="px-2 py-1 text-center bg-slate-50/40">
        <input
          type="checkbox"
          className="rounded border-slate-300 text-orange-600 focus:ring-0 cursor-pointer"
          checked={row.isChecked}
          onChange={(e) =>
            handleInputChange(row.id, "isChecked", e.target.checked)
          }
        />
      </td> 

      {/* Debit */}
      <td
        className={`p-0 transition-colors relative ${
          isDebitError || isAllRequired || isDibitAndCreditError
            ? "ring-2 ring-red-500 ring-inset bg-red-50/20"
            // : isDebitDisabled
            //   ? "cursor-not-allowed"
              : "hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset"
        }`}
      >
        <NumericFormat
          value={row.Debit}
          data-field="Debit"
          data-nav="cell"
          thousandSeparator=","
          decimalScale={4}
          fixedDecimalScale
          allowNegative={false}
          // disabled={isDebitDisabled}
          className="w-full h-full px-2 py-2 bg-transparent text-right font-mono outline-none text-slate-800 disabled:cursor-not-allowed "
          onValueChange={(values) => {
            handleInputChange(row.id, "Debit", values.value || "0");
          }}
        />
      </td>

      {/* Credit */}
      <td
        className={`p-0 transition-colors relative ${
          isAllRequired || isDibitAndCreditError
            ? "ring-2 ring-red-500 ring-inset bg-red-50/20"
            // : isCreditDisabled
            //   ? "  cursor-not-allowed"
              : "hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10"
        }`}
      >
        <NumericFormat
          value={row.Credit}
          data-field="Credit"
          data-nav="cell"
          thousandSeparator=","
          decimalScale={4}
          fixedDecimalScale
          allowNegative={false}
          // disabled={isCreditDisabled}
          className="w-full h-full px-2 py-2 bg-transparent text-right font-mono outline-none text-slate-800 disabled:cursor-not-allowed"
          onValueChange={(values) => {
            handleInputChange(row.id, "Credit", values.value || "0");
          }}
        />
      </td>

      {/* Account */}
      <td
        className={`p-0 transition-colors relative ${
          isAccountError || isAllRequired
            ? "ring-2 ring-red-500 ring-inset bg-red-50/20 z-10"
            : "hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10"
        }`}
      >
        <select
          className="w-full h-full px-2.5 py-2 bg-transparent outline-none text-slate-700 cursor-pointer "
          value={row.Account}
          data-field="Account"
          data-nav="cell"
          onChange={(e) => {
            handleInputChange(row.id, "Account", e.target.value);
          }}
        >
          <option value="">Select Account</option>
          <option value="10101">10101 - Cash in Hand</option>
          <option value="10201">10201 - Main Bank Account</option>
        </select>
      </td>

      {/* Currency */}
      <td className="p-0 transition-colors hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10 relative">
        <select
          className="w-full h-full px-2 py-2 bg-transparent outline-none text-slate-700 cursor-pointer"
          value={row.Currency}
          data-nav="cell"
          onChange={(e) => {
            handleInputChange(row.id, "Currency", e.target.value);
          }}
        >
          <option value="JOD">JOD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </td>

      {/* Rate */}
      <td className="p-0 transition-colors hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10 relative">
        <input
          type="text"
          data-nav="cell"
          className="w-full h-full px-2 py-2 text-right font-mono bg-transparent outline-none text-slate-800"
          value={row.Rate}
          onChange={(e) => {
            handleInputChange(row.id, "Rate", e.target.value);
          }}
        />
      </td>

      {/* Due Date */}
      <td className="p-0 transition-colors hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10 relative">
        <input
          type="date"
          data-nav="cell"
          className="w-full h-full px-2.5 py-2 bg-transparent outline-none text-slate-700"
          value={row.Date}
          onChange={(e) => {
            handleInputChange(row.id, "Date", e.target.value);
          }}
        />
      </td>

      {/* Cost Center */}
      <td className="p-0 transition-colors hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10 relative">
        <select
          className="w-full h-full px-2.5 py-2 bg-transparent outline-none text-slate-700 cursor-pointer"
          value={row.CostCenter}
          data-nav="cell"
          onChange={(e) => {
            handleInputChange(row.id, "CostCenter", e.target.value);
          }}
        >
          <option value="">None</option>
          <option value="admin">Administration</option>
          <option value="sales">Sales & Marketing</option>
        </select>
      </td>

      {/* Description */}
      <td className="p-0 transition-colors hover:ring-1 hover:ring-orange-500 hover:ring-inset focus-within:ring-1 focus-within:ring-orange-500 focus-within:ring-inset focus-within:bg-white focus-within:z-10 relative">
        <input
          type="text"
          placeholder="Line description..."
          className="w-full h-full px-3 py-2 bg-transparent outline-none text-slate-700 placeholder-slate-400"
          value={row.Description}
          data-nav="cell"
          onChange={(e) => {
            handleInputChange(row.id, "Description", e.target.value);
          }}
        />
      </td>
    </tr>
  );
}
