import { ReactNode } from "react";
import './Title.css'

type TitleProps = {
  className?: string;
  children: ReactNode;
};

const Title = ({ className, children }: TitleProps) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;
