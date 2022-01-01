import React from 'react';
import { Link } from 'react-router-dom';

// TODO this will be updated to match book types
export interface ICardProps {
	title: string;
	description: string;
	tags?: string[];
	image: string;
	authors?: string[];
	id: string;
	type: string;
}

const Card = ({
	title,
	description,
	tags,
	image,
	authors,
	id,
	type,
}: ICardProps) => {
	// TODO to add a link to go to book page/route
	return (
		<Link to={`/${type}/${id}`}>
			<div className="cursor-pointer hover:animate-pulse rounded bg-gray-100 overflow-hidden shadow-lg">
				<img className="w-96 rounded m-auto" src={image} alt={title} />
				<div className="px-6 py-4">
					{authors &&
						authors.map((author) => (
							<div className="font-bold text-xl mb-2 text-gray-600">
								{author}
							</div>
						))}

					<div className="font-bold text-md mb-2 text-indigo-400 decoration-zinc-50">
						{title}
					</div>
					<p className="text-gray-700 text-base overflow-hidden whitespace-nowrap overflow-ellipsis">
						{description}
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{tags &&
						tags.map((tag) => (
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								#{tag}
							</span>
						))}
				</div>
			</div>
		</Link>
	);
};

export default Card;
