import React from 'react';
import { ICardProps } from 'components/UI-Elements/Card';
import { useParams } from 'react-router-dom';

const Book = ({ title, description, tags, image, authors }: ICardProps) => {
	// get book id from use params
	const { id } = useParams<{ id: string }>();

	// const book = books.find((book) => book.id === bookId);

	const getBook = (id: string) => {
		// TODO to get book from id
		// const book = books.find((book) => book.id === bookId);
		// make a call to books and fetch the specific book and display data
	};

	React.useEffect(() => {
		getBook(id);
	}, [id]);

	// TODO to design Book page

	return (
		<div className="p-10 pl-auto rounded  overflow-hidden shadow-lg">
			<h2 className="text-2xl mb-5">Book Specific Page</h2>
			<img
				className="rounded-lg w-96"
				src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt={title}
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-gray-600">
					Book Title {id}
				</div>
				<div className="font-bold text-md mb-2 text-indigo-400 decoration-zinc-50">
					Information about book goes here
				</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Culpa, quia! Pariatur vero assumenda temporibus enim,
					consequatur nulla voluptate! Quis, nihil!
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Animae
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Cinema
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					Comedy
				</span>
			</div>
		</div>
	);
};

export default Book;
