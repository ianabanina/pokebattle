import styles from './button.module.css';

export const Button = (
	props: React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
) => {
	const { className = '', ...rest } = props;

	const mappedClassName = `${styles.button} ${className}`;

	return <button className={mappedClassName} {...rest} />;
};
