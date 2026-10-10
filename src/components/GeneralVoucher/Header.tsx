
export default function Header(){

    return (
                <header className="mb-6  flex justify-between  ">
          <div className="flex items-center gap-3">
            {/* أيقونة SVG مناسبة */}
            <div className="rounded-lg bg-slate-500 p-2 text-slate-700">
              <svg
                className="h-6 w-6"
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
              <p className="text-sm text-slate-500">
                Create and manage journal entries
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-xs text-slate-600 shadow-sm">
              <button
                type="button"
                className="px-2.5 py-1.5 hover:bg-slate-100 border-r border-slate-200"
              >
                &larr;
              </button>
              <span className="px-3 py-1.5 font-medium bg-slate-50">
                2 of 2
              </span>
              <button
                type="button"
                className="px-2.5 py-1.5 hover:bg-slate-100 border-l border-slate-200"
              >
                &rarr;
              </button>
            </div>

            {/* شارة الحالة - Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              Draft
            </span>
          </div>
        </header>
    )
}