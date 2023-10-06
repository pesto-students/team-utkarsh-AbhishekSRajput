export interface IBookList {
  books: IBook[]
}

export interface IBookDetail {
  book: IBook
}

export interface IBook {
  title: string;
  author: string;
  year: number;
};