"use client";

import { Field, Input } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import React from "react";

const CustomInput = ({
  label,
  name,
  defaultValue = "",
  placeholder,
  onChange,
  onBlur,
  isDisabled,
  errorMessage,
}: InputProps) => {
  return (
    <Field.Root invalid>
      <Field.Label>{label}</Field.Label>
      <Input size="lg" id={name} value={defaultValue} onBlur={onBlur} disabled={isDisabled} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      <Field.ErrorText>{errorMessage}</Field.ErrorText>
    </Field.Root>
  );
};

export default CustomInput;
