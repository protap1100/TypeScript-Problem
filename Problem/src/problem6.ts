{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2019,
  };

  function isRecentBook(recentBook: Book): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - recentBook.publishedYear <= 5;
  }
  console.log(isRecentBook(book1));
}
