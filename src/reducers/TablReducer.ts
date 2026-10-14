import { createEmptyRow, type ITableData } from "./voucherTypes";

 
type actionType =
  | { type: "AddRow" }
  | {
      type: "UPDATE_ROW_FIELD";
      payload: { id: string; field: keyof ITableData; value: string | boolean };
    }
   | {type: "SELECT_ALL" , payload:boolean}
   | { type: "DELETE_SELECTED"}     ;

// currentState = currentTableData
export default function reducer(
  currentTableData: ITableData[],
  action: actionType,
) {
  switch (action.type) {
    case "AddRow": {
      return [...currentTableData, createEmptyRow()];
    }
    case "UPDATE_ROW_FIELD": {
    //         if (validationError?.rowId === id) {
    //   setValidationError(null);
    // }
    const {id , field , value} = action.payload
     return currentTableData.map((row)=>{
        if(row.id !== id){
            return row;
        }
        return {
            ...row , 
            [field]: value
        }
     }) 
    }
    case "SELECT_ALL": {
        return currentTableData.map((row)=>(
        {...row , isChecked:action.payload}
        ))
    }
    case "DELETE_SELECTED": {
        const newTableData = currentTableData.filter((row) => !row.isChecked);
        if (newTableData.length === 0) {
            currentTableData = [createEmptyRow()]
        }
        else{
            currentTableData = newTableData;
        }
        return currentTableData
    }
    default: {
      return currentTableData;
    }
  }
}
