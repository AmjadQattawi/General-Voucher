import {
  Trash2,
  Printer,
  Plus,
  Save,
  Archive,
  Search,
  LogOut,
  Send,
  RotateCcw,
} from "lucide-react";

const baseButtonStyles =
  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-xs transition duration-150 cursor-pointer shrink-0";

const defaultButtonStyles = `${baseButtonStyles} border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700`;

export default function VoucherActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 overflow-x-auto">
        {/* Delete */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Trash2 className="w-5 h-5 text-rose-600" />
          Delete
        </button>

        {/* Print */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Printer className="w-5 h-5" />
          Print
        </button>

        {/* New */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Plus className="w-5 h-5" />
          New
        </button>

        {/* Post */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Send className="w-5 h-5" />
          Post
        </button>

        {/* Save */}
        <button
          type="submit"
          className={`${baseButtonStyles} px-7 bg-orange-500 hover:bg-orange-600 text-white shadow-md`}
        >
          <Save className="w-5 h-5" />
          Save
        </button>

        {/* Unpost */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <RotateCcw className="w-5 h-5" />
          Unpost
        </button>

        {/* Archive */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Archive className="w-5 h-5" />
          Archive
        </button>

        {/* Search */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <Search className="w-5 h-5" />
          Search
        </button>

        {/* Exit */}
        <button
          type="button"
          className={defaultButtonStyles}
        >
          <LogOut className="w-5 h-5" />
          Exit
        </button>
      </div>
    </div>
  );
}