import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@mui/joy";
import React from "react";

interface FormInputProps extends InputProps {
  name: string;
  type: string;
  placeholder: string;
  helperText?: string;
  label: string;
  value?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { name, type, placeholder, helperText, label, error, ...rest } =
      props;
    return (
      <FormControl error={error}>
        <FormLabel>{label}</FormLabel>
        <Input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          slotProps={{ input: { ref: ref } }}
          {...rest}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default FormInput;
