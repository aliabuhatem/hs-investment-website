'use client';

import { ReactNode, useId } from 'react';
import { AlertCircle } from 'lucide-react';

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

const inputCls =
  'tap w-full rounded-2xl border bg-ink px-4 py-3 text-sand placeholder:text-sand-400/60 transition-colors focus:outline-none';

const stateCls = (error?: string) =>
  error
    ? 'border-red-500/60 focus:border-red-500'
    : 'border-sand/15 focus:border-accent';

function Wrapper({
  label,
  id,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-sand">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {hint && <span className="text-xs text-sand-400">{hint}</span>}
      {children}
      {error && (
        <span
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-xs text-red-400"
        >
          <AlertCircle size={13} aria-hidden /> {error}
        </span>
      )}
    </div>
  );
}

type InputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & { as?: 'input' };

export function Input({ label, name, error, required, hint, ...rest }: InputProps) {
  const id = useId();
  return (
    <Wrapper label={label} id={id} error={error} required={required} hint={hint}>
      <input
        id={id}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputCls} ${stateCls(error)}`}
        {...rest}
      />
    </Wrapper>
  );
}

type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  label,
  name,
  error,
  required,
  hint,
  ...rest
}: TextareaProps) {
  const id = useId();
  return (
    <Wrapper label={label} id={id} error={error} required={required} hint={hint}>
      <textarea
        id={id}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputCls} ${stateCls(error)} min-h-[120px] resize-y`}
        {...rest}
      />
    </Wrapper>
  );
}

type SelectProps = BaseProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: { value: string; label: string }[];
  };

export function Select({
  label,
  name,
  error,
  required,
  hint,
  options,
  ...rest
}: SelectProps) {
  const id = useId();
  return (
    <Wrapper label={label} id={id} error={error} required={required} hint={hint}>
      <select
        id={id}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputCls} ${stateCls(error)} appearance-none`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-ink">
            {o.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
