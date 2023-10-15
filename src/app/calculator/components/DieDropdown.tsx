import _ from "lodash";
import { Form, InputGroup } from "react-bootstrap";

interface DieDropdownProps {
  label?: string;
  options: string[];
  onChange: (val: string) => void;
  value: string;
}

const DieDropdown = ({ label, onChange, options, value }: DieDropdownProps) => {
  return (
    <InputGroup>
      {!_.isUndefined(label) && <InputGroup.Text>{label}</InputGroup.Text>}
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
    </InputGroup>
  );
};

export default DieDropdown;
