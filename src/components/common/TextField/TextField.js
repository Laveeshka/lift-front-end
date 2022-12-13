import TextField from "@mui/material/TextField";

function CommonTextField({
  id,
  label,
  variant,
  type,
  helperText,
  size,
  inputValue,
  handleChange,
  defaultValue,
  sx
}) {
  return (
    <TextField
      required
      sx={sx}
      id={id}
      label={label}
      variant={variant}
      type={type}
      helperText={helperText}
      size={size}
      value={inputValue}
     onChange={handleChange}
     defaultValue={defaultValue}
    ></TextField>
  );
}

export default CommonTextField;
