import React from 'react';
import type { LucideIcon } from 'lucide-react';

type ButtonProps = {
	icon?: LucideIcon;
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	type?: 'button' | 'submit';
	className?: string;
};

const Button = ({
	icon: Icon,
	children,
	href,
	onClick,
	type = 'button',
	className = '',
}: ButtonProps) => {
	const content = (
		<>
			{Icon && <Icon className='kmt-btn-icon' size={32} strokeWidth={2} />}
			<span className='kmt-btn-label'>{children}</span>
		</>
	);

	const classes = `kmt-btn ${className}`.trim();

	if (href) {
		return (
			<a href={href} className={classes}>
				{content}
			</a>
		);
	}

	return (
		<button type={type} onClick={onClick} className={classes}>
			{content}
		</button>
	);
};

export default Button;
