import type { FC, ReactNode } from "react";

interface SignUpProps {
	children?: ReactNode;
}

const SignUp: FC<SignUpProps> = ({ children }) => {
	return <div className="flex-1">{children}</div>;
};

export default SignUp;
