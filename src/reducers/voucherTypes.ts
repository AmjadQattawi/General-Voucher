export interface IValidationError {
  rowId: string;
  field: "Account" | "Debit" | "Credit" | "ALL_REQUIRED" | "Debit&Credit";
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

export function createEmptyRow(): ITableData {
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

