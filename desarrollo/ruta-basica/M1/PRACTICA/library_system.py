
GENRES = ["Fiction", "Non-Fiction", "Science", "Biography", "Children"]
library = []

def addBook():
    print("\n--- Add a New Book ---")
    title = input("Enter the title: ").strip().title()
    author = input("Enter the author's name: ").strip().title()
    while True:
        try:
            copies = int(input("Enter the number of copies: "))
            if copies < 1:
                print("Please enter a positive number.")
            else:
                break
        except ValueError:
            print("Please enter a valid number.")
    while True:
        genre = input("Enter the genre (Fiction, Non-Fiction, Science, Biography, Children): ").strip().title()
        if genre in GENRES:
            break
        else:
            print("Invalid genre. Please choose from the list.")
    book = {
        "title": title,
        "author": author,
        "copies": copies,
        "genre": genre,
        "original": copies
    }
    library.append(book)
    print("Book added successfully.")

def searchBook():
    print("\n--- Search a Book ---")
    title = input("Enter the title to search: ").strip().lower()
    for book in library:
        if title in book["title"].lower():
            print(f"Title: {book['title']} | Author: {book['author']} | Copies: {book['copies']} | Genre: {book['genre']}")
            return
    print("Book not found.")

def lendBook():
    print("\n--- Lend a Book ---")
    title = input("Enter the title of the book to lend: ").strip().lower()
    for book in library:
        if title in book["title"].lower():
            if book["copies"] > 0:
                book["copies"] -= 1
                print(f"Book '{book['title']}' lent successfully.")
            else:
                print("No copies available.")
            return
    print("Book not found.")

def returnBook():
    print("\n--- Return a Book ---")
    title = input("Enter the title of the book to return: ").strip().lower()
    for book in library:
        if title in book["title"].lower():
            if book["copies"] < book["original"]:
                book["copies"] += 1
                print(f"Book '{book['title']}' returned successfully.")
            else:
                print("All copies are already in the library.")
            return
    print("Book not found.")

def deleteBook():
    print("\n--- Delete a Book ---")
    title = input("Enter the title of the book to delete: ").strip().lower()
    for book in library:
        if title in book["title"].lower():
            if book["copies"] == book["original"]:
                library.remove(book)
                print("Book removed from catalog.")
            else:
                print("Cannot remove book: some copies are still on loan.")
            return
    print("Book not found.")

def listByGenre():
    print("\n--- List Books by Genre ---")
    genre = input("Enter a genre to list: ").strip().title()
    if genre not in GENRES:
        print("Invalid genre.")
        return
    found = [book for book in library if book["genre"] == genre]
    if found:
        for b in found:
            print(f"Title: {b['title']} | Author: {b['author']} | Copies: {b['copies']}")
    else:
        print("No books found in that genre.")

def inventorySummary():
    print("\n--- Inventory Summary ---")
    total_books = len(library)
    total_copies = sum(book["copies"] for book in library)
    print(f"Total different books: {total_books}")
    print(f"Total copies available: {total_copies}")

def menu():
    while True:
        print("\nLibrary System Menu")
        print("1. Add Book")
        print("2. Search Book")
        print("3. Lend Book")
        print("4. Return Book")
        print("5. Delete Book")
        print("6. List Books by Genre")
        print("7. Inventory Summary")
        print("8. Exit")
        option = input("Choose an option: ")
        if option == "1":
            addBook()
        elif option == "2":
            searchBook()
        elif option == "3":
            lendBook()
        elif option == "4":
            returnBook()
        elif option == "5":
            deleteBook()
        elif option == "6":
            listByGenre()
        elif option == "7":
            inventorySummary()
        elif option == "8":
            print("Goodbye!")
            break
        else:
            print("Invalid option.")

menu()
