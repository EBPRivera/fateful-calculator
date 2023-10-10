import styles from "./styles.module.scss";

interface CalculatorProps {
  children: React.JSX.Element;
}

const CalculatorLayout = ({ children }: CalculatorProps) => {
  return <div className={styles.calculator}>{children}</div>;
};

export default CalculatorLayout;
