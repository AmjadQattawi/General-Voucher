import { useReducer, useState } from "react";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { Trash } from "lucide-react";
import tableReducer from "../../../reducers/TablReducer";
import {
  createEmptyRow,
  type ITableData,
  type IValidationError,
} from "../../../reducers/voucherTypes";

type TableProps = {
  isReadOnly: boolean;
};

export default function Table({ isReadOnly }: TableProps) {
  // const [tableData, setTableData] = useState<ITableData[]>([createEmptyRow()]);

  const [tableData, dispatch] = useReducer(tableReducer, [createEmptyRow()]);

  const [validationError, setValidationError] =
    useState<IValidationError | null>(null);

  const totalDebit = tableData.reduce(
    (acc, row) => acc + (parseFloat(row.Debit) || 0),
    0,
  );
  const totalCredit = tableData.reduce(
    (acc, row) => acc + (parseFloat(row.Credit) || 0),
    0,
  );
  const difference = Math.abs(totalDebit - totalCredit);

  function handleAddRow() {
    dispatch({ type: "AddRow" });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const currentElement = e.target as HTMLElement;
    const allInputs = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-nav="cell"]:not([disabled])',
      ),
    );
    const currentIndex = allInputs.indexOf(currentElement);
    const nextElement = allInputs[currentIndex + 1];
    if (nextElement) {
      nextElement.focus();
    } else {
      const lastRow = tableData[tableData.length - 1];
      if (
        lastRow.Account !== "" &&
        ((parseFloat(lastRow.Debit) > 0 && parseFloat(lastRow.Credit) === 0) ||
          (parseFloat(lastRow.Credit) > 0 && parseFloat(lastRow.Debit) === 0))
      ) {
        handleAddRow();
        setTimeout(() => {
          const freshInputs = Array.from(
            document.querySelectorAll<HTMLElement>(
              '[data-nav="cell"]:not([disabled])',
            ),
          );
          freshInputs[currentIndex + 1]?.focus();
        }, 0);
      } else if (
        lastRow.Account !== "" &&
        parseFloat(lastRow.Debit) === 0 &&
        parseFloat(lastRow.Credit) === 0
      ) {
        // console.log("you must fill Debit or credit");
        setValidationError({ rowId: lastRow.id, field: "Debit" });
        focusErrorField("Debit");
      } else if (
        lastRow.Account === "" &&
        (parseFloat(lastRow.Debit) > 0 || parseFloat(lastRow.Credit) > 0)
      ) {
        // console.log("you must fill Account");
        setValidationError({ rowId: lastRow.id, field: "Account" });
        focusErrorField("Account");
      } else if (
        parseFloat(lastRow.Debit) > 0 &&
        parseFloat(lastRow.Credit) > 0
      ) {
        // You can fill in either the credit or debit
        focusErrorField("Debit");
        setValidationError({ rowId: lastRow.id, field: "Debit&Credit" });
      } else if (
        lastRow.Account === "" &&
        parseFloat(lastRow.Debit) === 0 &&
        parseFloat(lastRow.Credit) === 0
      ) {
        // console.log("you must fill Account and (Debit Or Credit)");
        setValidationError(null);
        const postButton = document.getElementById("btn-post-entry");
        postButton?.focus();
      }
    }
  }

  function handleInputChange(
    id: string,
    field: keyof ITableData,
    value: string | boolean,
  ) {
    if (validationError?.rowId === id) {
      setValidationError(null);
    }
    dispatch({ type: "UPDATE_ROW_FIELD", payload: { id, field, value } });
  }

  function focusErrorField(field: "Account" | "Debit" | "Credit") {
    const targetInput = document.querySelector<HTMLElement>(
      `tbody tr:last-child [data-field="${field}"]`,
    );
    targetInput?.focus();
  }

  const isAllSelected =
    tableData.length > 0 && tableData.every((row) => row.isChecked);
  function handleSelectAll(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "SELECT_ALL", payload: e.target.checked });
  }

  function handleDeleteSelected() {
    dispatch({ type: "DELETE_SELECTED" });

    setValidationError(null);
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div
        className={`overflow-x-auto overflow-y-auto max-h-[calc(100vh-480px)] ${
          isReadOnly ? "pointer-events-none select-none opacity-80" : ""
        }`}
      >
        <table className="w-full border-collapse text-xs text-left">
          {/* Table Head */}
          <thead className="sticky top-0 z-10 bg-slate-200 font-semibold uppercase tracking-wider border-b border-slate-300">
            <tr className="divide-x divide-slate-300">
              <th className="w-16 px-2 py-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    title="Delete Selected"
                    className="text-red-400 hover:text-red-500 transition cursor-pointer"
                    onClick={handleDeleteSelected}
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    className="rounded border-slate-300 text-orange-600 focus:ring-0 cursor-pointer"
                    onChange={handleSelectAll}
                  />
                </div>
              </th>
              <th className="w-30 px-3 py-3 text-right  ">Debit</th>
              <th className="w-30 px-3 py-3 text-right  ">Credit</th>
              <th className="w-55 px-3 py-3">Account</th>
              <th className="w-23 px-3 py-3">Currency</th>
              <th className="w-30 px-3 py-3 text-right  ">Rate</th>
              <th className="w-33 px-3 py-3">Date</th>
              <th className="w-30 px-3 py-3">Cost Center</th>
              <th className="w-55 px-3 py-3">Description</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody
            onKeyDown={handleKeyDown}
            className="divide-y divide-slate-200 bg-white font-medium text-slate-800"
          >
            {tableData.map((row, index) => (
              <TableRow
                key={row.id}
                row={row}
                index={index}
                handleInputChange={handleInputChange}
                validationError={validationError}
              />
            ))}
          </tbody>

          {/* Table Foter */}
          <TableFooter
            totalDebit={totalDebit}
            totalCredit={totalCredit}
            difference={difference}
          />
        </table>
      </div>
    </div>
  );
}
