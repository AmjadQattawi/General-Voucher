
export default function VoucherHeader() {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
      {/* Title & Icon */}
      <div className="flex items-center gap-1">
        <div className="rounded-xl  p-2.5 ">
          <svg
            className="h-6 w-6  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            General Voucher
          </h1>
          {/* <p className="text-sm text-slate-600">
            Create and manage journal entries
          </p> */}
        </div>
      </div>

     {/* Right Controls: Branch Code, Navigation, Status */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          Draft
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
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>

          {/* Previous Item (<) */}
          <button
            type="button"
            title="Previous Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-r border-slate-200 transition cursor-pointer text-slate-500"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
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
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Last Item (>>|) */}
          <button
            type="button"
            title="Last Voucher"
            className="px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900 border-l border-slate-200 transition cursor-pointer text-slate-500"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
 
      </div>
    </header>
  );
}