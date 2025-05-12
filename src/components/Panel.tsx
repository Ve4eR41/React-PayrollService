import classNames from 'classnames';
import {  ReactNode } from 'react';


interface PanelProps {
  children?: ReactNode;
  className?: string;
  isWFull?: boolean;
  isCleanStyle?: boolean;
}

function Panel({ children, className, isWFull, isCleanStyle, ...rest }: PanelProps) {
  const classes = classNames(
    className,
    {
      'w-full': !isWFull,
      'rounded shadow bg-white p-2 ': !isCleanStyle
    }
  );

  return <div {...rest} className={classes}>
    {children}
  </div> 

} 
 
export default Panel;
