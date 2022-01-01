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
	const [query, setQuery] = React.useState<null | string>('rich dad');
	// set books array to empty array
	const [books, setBooks] = React.useState<null | IBooks>(null);

	console.log('query in APP', query);

	// TODO set error also

	const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

	// TODO add pagination
	// TODO add search
	// TODO add sort

	// useEffect to fetch all the books
	// React.useEffect(() => {
	// 	// set is loading state to true
	// 	setIsLoading(true);
	// 	// fetch all the books
	// 	fetch(
	// 		`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=newest&maxResults=6&startIndex=0&key=${API_KEY}`,
	// 	)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			// set is loading state to false
	// 			setIsLoading(false);
	// 			// set books state to the data
	// 			setBooks(data);
	// 		})
	// 		.catch((error) => {
	// 			// set is loading state to false
	// 			setIsLoading(false);
	// 			// set books state to empty array
	// 			setBooks(null);
	// 		});
	// }, [query]);

	const fetchBooks = async (query: string) => {
		// fetch all books with async await
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=newest&maxResults=6&startIndex=0&key=${API_KEY}`,
			);
			const data = await response.json();
			console.log('data inside fetch data func', data);
			// set books state to the data
			setBooks(data);
			setIsLoading(false);
		} catch (error) {
			console.log('error', error);
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		if (query) fetchBooks(query);
	}, [query]);

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
							setIsLoading,
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
