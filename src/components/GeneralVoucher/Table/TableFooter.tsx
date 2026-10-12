export default function TableFooter() {
  return (
    <tfoot className="sticky bottom-0 z-10 bg-slate-200 border-t-2 border-slate-300 font-bold text-slate-800">
      <tr className="divide-x divide-slate-300">
        <td className="px-2 py-2.5 text-center text-slate-500">TOTALS</td>
        <td className="px-2 py-2 text-right font-mono text-slate-900">
          0.0000
        </td>
        <td className="px-2 py-2.5 text-right font-mono text-slate-900">
          0.0000
        </td>
        <td colSpan={6} className="px-4 py-2.5 text-right">
          <span className="text-slate-500 font-normal mr-2">Difference:</span>
          <span className="font-mono text-emerald-600 mr-3">0.0000 JOD</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
            Balanced
          </span>
        </td>
      </tr>
    </tfoot>
  );
}
