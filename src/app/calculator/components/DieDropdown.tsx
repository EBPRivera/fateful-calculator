import _ from "lodash";
import { Form } from "react-bootstrap";

interface DieDropdownProps {
  options: string[];
  onChange: (val: string) => void;
  value: string;
}

const DieDropdown = ({ onChange, options, value }: DieDropdownProps) => {
  return (
    <Form.Select
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value);
      }}
      value={value}
    >
      {_.map(options, (option, key) => {
        return <option key={key}>{option}</option>;
      })}
    </Form.Select>
  );
};

export default DieDropdown;
