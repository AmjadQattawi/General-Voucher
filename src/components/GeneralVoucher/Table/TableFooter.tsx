
type TableFooterProps = {
  totalDebit:number;
  totalCredit:number;
  difference:number;
}

function formatAmount(val: number): string {
  return val.toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });
}


export default function TableFooter(   {totalDebit , totalCredit , difference } :  TableFooterProps) {

  const isBalanced = difference === 0 && totalDebit > 0;

  return (
    <tfoot className="sticky bottom-0 z-10 bg-slate-200 border-t-2 border-slate-300 font-bold text-slate-800">
      <tr className="divide-x divide-slate-300">
        <td className="px-2 py-2.5 text-center text-slate-500">TOTALS</td>
        <td className="px-2 py-2 text-right font-mono text-slate-900">
          {formatAmount(totalDebit)}
        </td>
        <td className="px-2 py-2.5 text-right font-mono text-slate-900">
          {formatAmount(totalCredit)}
        </td>
        <td colSpan={6} className="px-4 py-2.5 text-right">
          <span className="text-slate-500 font-normal mr-2">Difference:</span>
          <span className="font-mono text-emerald-600 mr-3">{formatAmount(difference)} </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              isBalanced
                ? "bg-emerald-100 text-emerald-800"
                : "bg-rose-100 text-rose-800"
            }`}
          >
            {isBalanced ? "Balanced" : "Unbalanced"}
          </span>
        </td>
      </tr>
    </tfoot>
  );
}
