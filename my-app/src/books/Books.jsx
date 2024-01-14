const Books = () => {
  const favoriteBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];

  return (
    <section>
      <h1>Books</h1>
      <ul>
        {favoriteBooks.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Books;
