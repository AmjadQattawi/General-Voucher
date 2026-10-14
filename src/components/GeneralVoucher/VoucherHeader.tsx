import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FileText,
} from "lucide-react";
import type { VoucherStatus } from "../../page/GeneralVoucher";

type VoucherHeaderProps = {
  status: VoucherStatus;
  isPosted: boolean;
};
export default function VoucherHeader({
  status,
  isPosted,
}: VoucherHeaderProps) {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
      {/* Title & Icon */}
      <div className="flex items-center gap-1">
        <div className="rounded-xl  p-2.5 ">
          <FileText />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">General Voucher</h1>
          <p className="text-sm text-slate-600">
            Create and manage journal entries
          </p>
        </div>
      </div>

      {/* Right Controls:  Navigation, Status */}
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
            isPosted
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-orange-200 bg-orange-50 text-orange-700"
          }   
             
          
          `}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isPosted ? "bg-emerald-500" : "bg-orange-500"
            }`}
          ></span>
          {status}
        </span>

        {/* Branch Code Read-only Badge */}

        {/* Voucher Navigation (First, Prev, Counter, Next, Last) */}
        <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden text-xs text-slate-600 shadow-xs">
          {/* First Item (|<<) */}
          <button
            type="button"
            title="First Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-r border-slate-200 transition cursor-pointer text-slate-500"
          >
            <ChevronsLeft />
          </button>

          {/* Previous Item (<) */}
          <button
            type="button"
            title="Previous Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-r border-slate-200 transition cursor-pointer text-slate-500"
          >
            <ChevronLeft />
          </button>

          {/* Current / Total Counter */}
          <span className="px-3 py-1.5 font-medium font-mono text-slate-700 bg-slate-50/60 select-none">
            1 of 2
          </span>

          {/* Next Item (>) */}
          <button
            type="button"
            title="Next Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-l border-slate-200 transition cursor-pointer text-slate-500"
          >
            <ChevronRight />
          </button>

          {/* Last Item (>>|) */}
          <button
            type="button"
            title="Last Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-l border-slate-200 transition cursor-pointer text-slate-500"
          >
            <ChevronsRight />
          </button>
        </div>
      </div>
    </header>
  );
}
