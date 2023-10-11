import classNames from "classnames";
import { Button } from "react-bootstrap";

import styles from "./CButton.module.scss";

interface CButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const CButton = ({ children, className, href }: CButtonProps) => {
  return (
    <Button className={classNames(styles["c-button"], className)} href={href}>
      {children}
    </Button>
  );
};

export default CButton;
