export default function Actions() {
  return (
    <div className="xl:col-span-1 h-full">
      {/* Main card: 'justify-between' anchors balance on top and actions at bottom */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between">
        
        {/* Top: Balance status & totals */}
        <div className="space-y-3 pb-4 border-b border-slate-100">
        {/* Balance status */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            {/* 'tracking-wider': increases letter-spacing */}
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Balance Status
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
              Balanced
            </span>
          </div>

        {/* totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center text-slate-600">
              <span>Total Debit</span>
              {/* 'font-mono': monospace font keeps numbers aligned */}
              <span className="font-mono font-bold text-slate-800">0.000 JOD</span>
            </div>
            {/*  */}
            <div className="flex justify-between items-center text-slate-600">
              <span>Total Credit</span>
              <span className="font-mono font-bold text-slate-800">0.000 JOD</span>
            </div>
            {/*  */}
            <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
              <span className="font-semibold text-slate-700">Difference</span>
              <span className="font-mono font-bold text-emerald-600">0.000 JOD</span>
            </div>
          </div>
        {/* End Top: Balance status & totals */}
        </div>

        {/* Bottom: Action buttons section */}
        <div className="pt-4 flex flex-col gap-2.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Actions
          </span>

          {/* Row 1: Primary actions (Save & New) */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="submit"
              className="w-full bg-[#E45D1A] hover:bg-orange-600 text-white font-medium py-2 px-3 rounded-xl transition duration-150 shadow-xs flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save
            </button>

            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 px-3 rounded-xl border border-slate-200 transition text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New
            </button>
          </div>

          {/* Row 2: Workflow actions (Post, Print, Delete) */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-2 rounded-xl border border-slate-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Post
            </button>

            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-2 rounded-xl border border-slate-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>

            <button
              type="button"
              className="w-full bg-rose-50 hover:bg-rose-100 text-rose-600 py-2 px-2 rounded-xl border border-rose-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>

          {/* Row 3: Utility actions (Search, Archive, Exit) */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-1.5 px-2 rounded-xl border border-slate-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>

            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-1.5 px-2 rounded-xl border border-slate-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Archive
            </button>

            <button
              type="button"
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-1.5 px-2 rounded-xl border border-slate-200 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Exit
            </button>
          </div>
        {/* End Bottom: Action buttons section */}
        </div>


        {/* End Main card */}
      </div>
    </div>
  );
}