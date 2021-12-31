import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import UseScrollToTop from 'hooks/useScrollToTop';
import ScrollToTop from 'components/utils/scrollToTop';
import Footer from 'components/Layouts/Footer';
import RoutesApp from 'components/App';
import AppContext from 'AppContext';
import { IBooks } from 'interfaces/books';

function App() {
	// set is loading state to false
	const [isLoading, setIsLoading] = React.useState(false);
	// set query state to empty string
	const [query, setQuery] = React.useState<null | string>(null);
	// set books array to empty array
	const [books, setBooks] = React.useState<null | IBooks[]>(null);

	const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

	// TODO add pagination
	// TODO add search
	// TODO add sort

	// useEffect to fetch all the books
	React.useEffect(() => {
		// set is loading state to true
		setIsLoading(true);
		// fetch all the books
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=adam-grant&orderBy=newest&maxResults=40&projection=full&startIndex=0&key=${API_KEY}`,
		)
			.then((response) => response.json())
			.then((data) => {
				// set is loading state to false
				setIsLoading(false);
				// set books state to the data
				setBooks(data);
			})
			.catch((error) => {
				// set is loading state to false
				setIsLoading(false);
				// set books state to empty array
				setBooks([]);
			});
	}, []);

	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppContext.Provider
						value={{
							isLoading,
							query,
							books,
							setQuery,
						}}
					>
						<RoutesApp />
					</AppContext.Provider>
				</Router>
				<Footer />
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
