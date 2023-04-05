import Button from "../Button";
import {} from "./styles";
import { InputContainer } from "./styles";

function Input({
  value,
  onChange,
  handleSearchRepo,
  placeholder,
  onKeyDown,
  disabled,
}) {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
      />
      <Button onClick={handleSearchRepo} disabled={disabled} />
    </InputContainer>
  );
}

export default Input;
