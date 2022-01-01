import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'AppContext';
import { toast } from 'react-toastify';

// TODO: to add a link to the header, add the following code:

const Header = () => {
	const { setQuery } = React.useContext(AppContext);

	const [localQuery, setLocalQuery] = React.useState('');
	const [handleSearch, setHandleSearch] = React.useState(false);

	const clickedSearch = () => {
		setHandleSearch(true);
	};

	const notifySearchEmpty = () => {
		toast.info('Please ensure that you have entered a search query', {
			position: 'bottom-left',
		});
	};

	React.useEffect(() => {
		if (localQuery == '' && handleSearch) {
			notifySearchEmpty();
		}

		if (handleSearch && localQuery != '') {
			setQuery ? setQuery(localQuery) : null;
			setLocalQuery('');
		}
		setHandleSearch(false);
	}, [handleSearch]);

	return (
		<header className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-1">
				<Link to="/">
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
						Home
					</span>
				</Link>
			</div>

			<div className="flex items-center justify-center">
				<div className="flex border-2 border-black rounded">
					<input
						type="text"
						className="px-4 py-2 w-80 focus:translate-x-0 focus:outline-none"
						placeholder="Search..."
						onChange={(e) => setLocalQuery(e.target.value)}
						value={localQuery}
						// TODO clear input after search
					/>
					<button
						onClick={clickedSearch}
						className="flex items-center text-indigo-500 bg-white justify-center px-4 border-l"
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
