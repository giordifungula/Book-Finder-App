import React from 'react';
import { IBooks } from 'interfaces/books';

interface IAppContext {
	isLoading: boolean;
	query: string | null;
	books: IBooks | null; //todo add type
	// Title, Author, Published Date, Picture, etc) this will come back from the API
	setQuery: React.Dispatch<React.SetStateAction<string | null>> | null;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | null;
}

const defaultContext: IAppContext = {
	isLoading: true,
	query: null,
	books: null,
	setQuery: null,
	setIsLoading: null,
};

export default React.createContext<IAppContext>(defaultContext);
