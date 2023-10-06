import React from "react";
import { IBookList } from "../../interfaces/IBook";

const Book: React.FC<IBookList> = ({ books }) => {
	return (
		<ul>
			{books?.length > 0 &&
				books.map((item, index: number) => {
					return (
						<li style={{ margin: "12px 12px" }} key={index}>
							<div>Title: {item.title}</div>
							<div>Author: {item.author}</div>
							<div>Year: {item.year}</div>
						</li>
					);
				})}
		</ul>
	);
};

export default Book;
