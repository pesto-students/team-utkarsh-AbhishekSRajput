import React, { PureComponent } from "react";
import { IBookList } from "../../interfaces/IBook";

class Book extends PureComponent<IBookList> {
	render() {
		const { books } = this.props;
		return (
			<>
				{books?.length > 0 &&
					books.map((item, index: number) => {
						return (
							<div style={{ margin: "12px 12px" }} key={index}>
								<h3>Title: {item.title}</h3>
								<p>Author: {item.author}</p>
								<p>Year: {item.year}</p>
							</div>
						);
					})}
			</>
		);
	}
}

export default Book;
