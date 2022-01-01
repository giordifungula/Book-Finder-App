interface IAccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: {
		isAvailable: boolean;
	};
}

interface IBooksItem {
	title: string;
	author: string;
	publishedDate: string;
	picture: string;
	accessInfo: IAccessInfo;
	etag: string;
	id: string;
	kind: string;
	saleInfo: {
		country: string;
		saleability: string;
		isEbook: boolean;
	};
	selfLink: string;
	volumeInfo: {
		authors: string[];
		categories: string[];
		subtitle: string;
		publisher: string;
		description: string;
		language: string;
		previewLink: string;
		infoLink: string;
		canonicalVolumeLink: string;
		title: string;
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
		averageRating: number;
		ratingsCount: number;
	};
}

export interface IBooks {
	items: IBooksItem[];
	// TODO add remaining props
}

export interface IBook {
	authors: string[];
	categories: string[];
	publishedDate: string;
	subtitle: string;
	publisher: string;
	description: string;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	title: string;
	imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
	};
	averageRating: number;
	ratingsCount: number;
}
