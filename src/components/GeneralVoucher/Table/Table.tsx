import { useState } from "react";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

export interface IValidationError {
  rowId: string;
  field: "Account" | "Debit" | "Credit" | "ALL_REQUIRED";
}

export interface ITableData {
  id: string;
  isChecked: boolean;
  Debit: string;
  Credit: string;
  Account: string;
  Currency: string;
  Rate: string;
  Date: string;
  CostCenter: string;
  Description: string;
}

function createEmptyRow(): ITableData {
  return {
    id: crypto.randomUUID(),
    isChecked: false,
    Debit: "0",
    Credit: "0",
    Account: "",
    Currency: "JD",
    Rate: "1.0000",
    Date: new Date().toISOString().split("T")[0],
    CostCenter: "",
    Description: "",
  };
}

export default function Table() {
  const [tableData, setTableData] = useState<ITableData[]>([createEmptyRow()]);

  const [validationError, setValidationError] =
    useState<IValidationError | null>(null);

  function handleAddRow() {
    setTableData([...tableData, createEmptyRow()]);
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
        (parseFloat(lastRow.Debit) > 0 || parseFloat(lastRow.Credit) > 0)
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
        // هون المشكلة
        console.log("you must fill Debit or credit");
        setValidationError({ rowId: lastRow.id, field: "Debit" });
        focusErrorField("Debit");
      } else if (
        lastRow.Account === "" &&
        (parseFloat(lastRow.Debit) > 0 || parseFloat(lastRow.Credit) > 0)
      ) {
        console.log("you must fill Account");
        setValidationError({ rowId: lastRow.id, field: "Account" });
        focusErrorField("Account");
      } else if (
        lastRow.Account === "" &&
        parseFloat(lastRow.Debit) === 0 &&
        parseFloat(lastRow.Credit) === 0
      ) {
        console.log("you must fill Account and (Debit Or Credit)");
        setValidationError({ rowId: lastRow.id, field: "ALL_REQUIRED" });
        focusErrorField("Debit");
      }
    }
  }

  function handleInputChange(
    id: string,
    field: keyof ITableData,
    value: string,
  ) {
    if (validationError?.rowId === id) {
      setValidationError(null);
    }
    setTableData(function (prevRows) {
      return prevRows.map((row) => {
        if (row.id !== id) {
          return row;
        }
        const updatedRow = {
          ...row,
          [field]: value,
        };
        if (field === "Debit" && parseFloat(value) > 0) {
          updatedRow.Credit = "0";
        } else if (field === "Credit" && parseFloat(value) > 0) {
          updatedRow.Debit = "0";
        }
        return updatedRow;
      });
    });
  }

  function focusErrorField(field: "Account" | "Debit" | "Credit") {
    const targetInput = document.querySelector<HTMLElement>(
      `tbody tr:last-child [data-field="${field}"]`,
    );
    targetInput?.focus();
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-480px)]  ">
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-orange-600 focus:ring-0 cursor-pointer"
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
          <TableFooter />
        </table>
      </div>
    </div>
  );
}
