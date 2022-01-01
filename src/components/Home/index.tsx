import React from 'react';
import AppContext from 'AppContext';
// UI-Elements
import Card from 'components/UI-Elements/Card';

const Home = () => {
	const { books, query, isLoading } = React.useContext(AppContext);
	console.log('books', books);
	return (
		<div>
			<div
				className="relative pt-16 pb-32 flex content-center items-center justify-center"
				style={{
					minHeight: '75vh',
				}}
			>
				<div
					className="absolute top-0 w-full h-full bg-center bg-cover"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80')",
					}}
				>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-75 bg-black"
					></span>
				</div>
				<div className="container relative mx-auto">
					<div className="items-center flex flex-wrap">
						<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
							<div className="pr-12">
								<h1 className="text-white font-semibold text-5xl">
									Book Finder
								</h1>
								<p className="mt-4 text-lg text-gray-300">
									Find All the Books you need in one place. We
									are here to help you find the books you
									need. Look no more when it comes to
									searching for all the latest books in town.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="-mt-5 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{isLoading === false &&
					books &&
					books.items.map((book) => (
						<Card
							title={book.volumeInfo.title}
							authors={book.volumeInfo?.authors}
							description={book.volumeInfo.description}
							image={book.volumeInfo.imageLinks?.thumbnail}
							tags={book.volumeInfo.categories}
							id={book.id}
							type="book"
						/>
					))}
			</div>
			{query === '' ? (
				<div className="text-center mt-10">
					<h1 className="text-gray-500 text-xl">
						No results found {query} Please try and search again
					</h1>
				</div>
			) : null}
			{isLoading === true ? (
				<div className="flex justify-center items-center">
					<div
						className="spinner-border w-100 border-15 border-black bg-indigo-800 animate-spin inline-block w-8 h-8 border-4 rounded-full"
						role="status"
					>
						<span className="visually-hidden text-white text-lg">
							Loading...
						</span>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Home;
