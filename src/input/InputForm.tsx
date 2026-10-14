
interface InputForm extends React.InputHTMLAttributes<HTMLElement> {
  label: string;
}

export const inputStyles =
  "focus:outline-none border border-slate-300 hover:border-orange-500 focus:border-orange-500 transition px-3.5 py-2 rounded-xl bg-white text-sm text-slate-800 placeholder-slate-400";

export default function InputForm({
  label,
  id,
  type = "text",
  disabled = false,
  className = "",
  placeholder,
  readOnly,
  defaultValue,
}: InputForm) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="voucher-date" className="font-medium  ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${inputStyles} ${className}`}
        readOnly={readOnly}
        disabled={disabled}
      />
    </div>
  );
}
