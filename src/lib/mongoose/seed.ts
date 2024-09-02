import { Types } from "mongoose";

const bookSeedData = [
    {
        _id: new Types.ObjectId(),
        title: 'The Great Gatsby',
        authorName: 'F. Scott Fitzgerald',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: '1984',
        authorName: 'George Orwell',
        quantity: 3
    },
    {
        _id: new Types.ObjectId(),
        title: 'To Kill a Mockingbird',
        authorName: 'Harper Lee',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'Pride and Prejudice',
        authorName: 'Jane Austen',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'Moby Dick',
        authorName: 'Herman Melville',
        quantity: 2
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Catcher in the Rye',
        authorName: 'J.D. Salinger',
        quantity: 7
    },
    {
        _id: new Types.ObjectId(),
        title: 'War and Peace',
        authorName: 'Leo Tolstoy',
        quantity: 3
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Odyssey',
        authorName: 'Homer',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'Brave New World',
        authorName: 'Aldous Huxley',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: 'Crime and Punishment',
        authorName: 'Fyodor Dostoevsky',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'Jane Eyre',
        authorName: 'Charlotte Brontë',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Lord of the Rings',
        authorName: 'J.R.R. Tolkien',
        quantity: 9
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Hobbit',
        authorName: 'J.R.R. Tolkien',
        quantity: 10
    },
    {
        _id: new Types.ObjectId(),
        title: 'Fahrenheit 451',
        authorName: 'Ray Bradbury',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Grapes of Wrath',
        authorName: 'John Steinbeck',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Scarlet Letter',
        authorName: 'Nathaniel Hawthorne',
        quantity: 3
    },
    {
        _id: new Types.ObjectId(),
        title: 'Wuthering Heights',
        authorName: 'Emily Brontë',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'Anna Karenina',
        authorName: 'Leo Tolstoy',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Brothers Karamazov',
        authorName: 'Fyodor Dostoevsky',
        quantity: 3
    },
    {
        _id: new Types.ObjectId(),
        title: 'Don Quixote',
        authorName: 'Miguel de Cervantes',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Sun Also Rises',
        authorName: 'Ernest Hemingway',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: 'Les Misérables',
        authorName: 'Victor Hugo',
        quantity: 2
    },
    {
        _id: new Types.ObjectId(),
        title: 'A Tale of Two Cities',
        authorName: 'Charles Dickens',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Picture of Dorian Gray',
        authorName: 'Oscar Wilde',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'Frankenstein',
        authorName: 'Mary Shelley',
        quantity: 7
    },
    {
        _id: new Types.ObjectId(),
        title: 'Dracula',
        authorName: 'Bram Stoker',
        quantity: 5
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Divine Comedy',
        authorName: 'Dante Alighieri',
        quantity: 4
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Iliad',
        authorName: 'Homer',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Adventures of Huckleberry Finn',
        authorName: 'Mark Twain',
        quantity: 8
    },
    {
        _id: new Types.ObjectId(),
        title: 'Ulysses',
        authorName: 'James Joyce',
        quantity: 3
    },
    {
        _id: new Types.ObjectId(),
        title: 'The Count of Monte Cristo',
        authorName: 'Alexandre Dumas',
        quantity: 6
    },
    {
        _id: new Types.ObjectId(),
        title: 'Great Expectations',
        authorName: 'Charles Dickens',
        quantity: 5
    }
];

const userSeedData = [
    {
        _id: new Types.ObjectId(),
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'admin123',
        role: 'member',
        bookRequests: []
    },
    {
        _id: new Types.ObjectId(),
        name: 'Librarian',
        email: 'library_a@lib.com',
        password: 'admin123',
        role: 'librarian',
        bookRequests: []
    },
    {
        _id: new Types.ObjectId(),
        name: 'Librarian',
        email: 'library_b@lib.com',
        password: 'admin123',
        role: 'librarian',
        bookRequests: []
    },
    {
        _id: new Types.ObjectId(),
        name: 'Super Admin',
        email: 'superadmin@lib.com',
        password: 'admin123',
        role: 'superAdmin',
        bookRequests: []
    }
];

const bookRequestSeedData = [
    {
        _id: new Types.ObjectId(),
        book: bookSeedData[0]._id,
        member: userSeedData[0]._id,
        requestDate: new Date(),
        requestDueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
        status: 'submitted'
    },
    {
        _id: new Types.ObjectId(),
        book: bookSeedData[1]._id,
        member: userSeedData[0]._id,
        requestDate: new Date(),
        requestDueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // Due in 14 days
        status: 'completed'
    },
    {
        _id: new Types.ObjectId(),
        book: bookSeedData[2]._id,
        member: userSeedData[0]._id,
        requestDate: new Date(),
        requestDueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // Due in 10 days
        status: 'rejected'
    }
];

const librarySeedData = [
    {
        _id: new Types.ObjectId(),
        name: 'Library A',
        books: [...bookSeedData.map((seed) => seed._id)],
        users: [userSeedData[0]._id, userSeedData[1]._id]
    },
    {
        _id: new Types.ObjectId(),
        name: 'Library B',
        books: [bookSeedData[2]._id],
        users: [userSeedData[2]._id]
    }
];

export {
    bookSeedData,
    userSeedData,
    bookRequestSeedData,
    librarySeedData,
};
