"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import React from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  errors,
  required,
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        <div className="mt-2">
          <input
            type={type}
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...register(id, { required })}
            className={clsx(
              `
                form-input
                block
                w-full
                rounded-md
                border-0
                py-1.5
                text-gray-900
                shadow-sm 
                ring-1 
                ring-inset 
                ring-gray-300 
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-sky-600
                sm:text-sm
                sm:leading-6, 

            `,
              errors[id] && "focus:ring-red-500",
              disabled && "opacity-50 cursor-not-allowed"
            )}
          />
        </div>
      </label>
    </div>
  );
};

export default Input;
