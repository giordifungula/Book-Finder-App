import React from 'react';
import { Link } from 'react-router-dom';

// TODO: to add a link to the header, add the following code:
// <Link to="/">

const Header = () => {
	return (
		<header className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-1">
				<svg
					className="fill-current h-8 w-8 mr-2"
					width="54"
					height="54"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<span className="font-semibold text-xl tracking-tight">
					ICON
				</span>
			</div>

			<div className="flex items-center justify-center">
				<div className="flex border-2 border-black rounded">
					<input
						type="text"
						className="px-4 py-2 w-80 focus:translate-x-0 focus:outline-none"
						placeholder="Search..."
					/>
					<button
						onClick={() => alert('clicked')}
						className="flex items-center justify-center px-4 border-l"
					>
						<svg
							className="w-6 h-6 text-gray-600"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
