import React from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from 'interfaces/books';
import AppContext from 'AppContext';
import { RightArrow } from 'components/utils/Icons';

const Book = () => {
	const { id } = useParams<{ id: string }>();

	const [book, setBook] = React.useState<IBook>();

	const { setIsLoading, isLoading } = React.useContext(AppContext);

	React.useEffect(() => {
		getBook(id);
	}, []);

	const getBook = async (id: string) => {
		try {
			setIsLoading ? setIsLoading(true) : null;
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes/${id}`,
			);
			const data = await response.json();
			setBook(data.volumeInfo);
			setIsLoading ? setIsLoading(false) : null;
		} catch (error) {
			console.log('error', error);
			setIsLoading ? setIsLoading(false) : null;
		}
	};

	return (
		<div className="p-10 pl-auto rounded  overflow-hidden shadow-lg">
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
			{book ? (
				<>
					<h2 className="text-2xl mb-5">Book Specific Page</h2>
					<img
						className="rounded-lg w-96"
						src={book.imageLinks.thumbnail}
						alt="Image of book"
					/>

					<div className="px-1 py-4">
						<div className="font-bold text-xl mb-2 text-gray-600">
							{book.title}
						</div>
						<div className="font-bold text-md mb-2 text-indigo-400 decoration-zinc-50">
							{book.subtitle}
						</div>
						<div className="flex flex-wrap mb-2 space-x-2">
							<span className="px-4 py-2 rounded-full border  border-gray-400 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
								Published Date {book.publishedDate}
							</span>
							<span className="px-4 py-2 rounded-full border  border-gray-800 text-indigo-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
								{book.publisher}
							</span>
						</div>
						{book.authors.length > 1 ? (
							book.authors.map((author, index) => (
								<div className="font-bold text-md mb-2 text-gray-600">
									Author {`#${index + 1} ${author}`}
								</div>
							))
						) : (
							<div className="font-bold text-md mb-2 text-gray-600">
								Author {` : ${book.authors[0]}`}
							</div>
						)}
						<div className="text-md mb-2 text-gray-500 decoration-zinc-50"></div>
						<p className="text-gray-700 text-base">
							{book.description}
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<div className="px-6 pt-4 pb-2">
							{book.categories &&
								book.categories.map((tag) => (
									<span className="inline-block hover:animate-pulse bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
										#{tag}
									</span>
								))}
						</div>
					</div>
					<div className="flex flex-wrap justify-center mt-10 space-x-2 items-end">
						<a href={book.previewLink} target="_blank">
							<span className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
								<img
									className="rounded-full w-14 h-14 max-w-none"
									alt="A"
									src={book.imageLinks.smallThumbnail}
								/>
								<span className="flex items-center px-3 py-2">
									Go to Google Books
								</span>
								<button className="bg-transparent hover focus:outline-none">
									<RightArrow />
								</button>
							</span>
						</a>
					</div>
				</>
			) : null}
		</div>
	);
};

export default Book;
