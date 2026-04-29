import classNames from 'classnames';
import { ReactNode } from 'react';
import { GoSync } from 'react-icons/go';



interface ButtonProps {
  loading?: boolean;
  secondary?: boolean;
  success?: boolean;
  circle?: boolean;
  rounded?: boolean;
  disable?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}



function Button({
  children,
  loading,
  secondary,
  success,
  circle,
  rounded,
  className,
  disable,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    className,
    `flex justify-center bg-green-600 items-center rounded-full border cursor-pointer
     text-green-500 font-bold
     border-2 border-green-100 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500`,
    {
      'opacity-80 bg-gray': loading,
      'bg-white text-green-700': secondary,
      'text-white': !secondary,
      'bg-green-200': success,
      'h-full w-full rounded-full px-0 py-0': circle,
      'px-3 py-1.5': !circle,
      'rounded-full': rounded,
      'opacity-50': disable,
      'hover:bg-green-500 hover:text-white': !disable && !loading,
    },
  );

  return <button {...rest} disabled={loading || disable} className={classes} onClick={onClick}>
    {loading ? <GoSync className='animate-spin' /> : children}
  </button>
    ;
}


export default Button;
