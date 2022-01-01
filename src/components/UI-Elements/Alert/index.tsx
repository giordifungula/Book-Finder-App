import React from 'react';

interface IAlert {
	text: string;
	variant:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark';
}

const Alert = ({ text, variant }: IAlert) => {
	const handleVariant = (variant: string) => {
		switch (variant) {
			case 'primary':
				return 'bg-blue-100';
			case 'secondary':
				return 'bg-purple-100';
			case 'success':
				return 'bg-green-100';
			case 'danger':
				return 'bg-red-100';
			case 'warning':
				return 'bg-yellow-100';
			case 'info':
				return 'bg-gray-50';
			case 'light':
				return 'bg-indigo-100';
			case 'dark':
				return 'bg-indigo-800';
			default:
				return 'bg-gray-300';
		}
	};

	return (
		<div
			className={` ${handleVariant(
				variant,
			)} rounded-lg py-5 px-6 text-base text-blue-700 mb-3`}
			role="alert"
		>
			{text}

			<button
				type="button"
				className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
};

export default Alert;
