import React from 'react';
import AppContext from 'AppContext';
// UI-Elements
import Card from 'components/UI-Elements/Card';

const Home = () => {
	const { books } = React.useContext(AppContext);
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
				<div
					className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
					style={{ height: '40px' }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-gray-300 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
			</div>
			{/* TODO to fetch all the results and display them inside the card */}
			{/* TODO to add link to take them to the other page */}
			{/* CREATE a book page */}
			<div className="-mt-24 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				<Card
					title="The Alchemist"
					author="River"
					description="The Alchemist is a novel by Brazilian author Paulo Coelho. It is regarded as one of the most important Brazilian works of modern times. The book was first published in 1988 and has sold over one million copies."
					image="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					tags={['photography', 'travel', 'winter']}
					id={1}
					type="book"
				/>
				<Card
					title="The Alchemist"
					author="Paulo Coelho"
					description="The Alchemist is a novel by Brazilian author Paulo Coelho. It is regarded as one of the most important Brazilian works of modern times. The book was first published in 1988 and has sold over one million copies."
					image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					tags={['photography', 'travel', 'winter']}
					id={2}
					type="book"
				/>
				<Card
					title="The Alchemist"
					author="River"
					description="The Alchemist is a novel by Brazilian author Paulo Coelho. It is regarded as one of the most important Brazilian works of modern times. The book was first published in 1988 and has sold over one million copies."
					image="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					tags={['photography', 'travel', 'winter']}
					id={3}
					type="book"
				/>
			</div>
		</div>
	);
};

export default Home;
