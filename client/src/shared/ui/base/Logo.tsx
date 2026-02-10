import type { FC } from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logo:FC<LogoProps> = ({className, ...props }) => {
  return (
    <div className={`text-primary font-bold text-4xl ${className || ''}`} {...props}>
      #ifn<span className="text-foreground">dev</span>
    </div>
  );
};

export default Logo;
