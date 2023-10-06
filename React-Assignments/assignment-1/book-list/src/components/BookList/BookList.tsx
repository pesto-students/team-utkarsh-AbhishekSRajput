import Book from "../Book";
import { IBook } from "../../interfaces/IBook";

const BookList = () => {
	const books: IBook[] = [
		{ title: "Book 1", author: "Author 1", year: 2020 },
		{ title: "Book 2", author: "Author 2", year: 2018 },
		{ title: "Book 3", author: "Author 3", year: 2022 },
	];
	return <Book books={books} />;
};

export default BookList;
