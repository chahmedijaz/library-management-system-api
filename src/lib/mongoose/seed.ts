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
    }
];

const userSeedData = [
    {
        _id: new Types.ObjectId(),
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'hashedPassword1',
        role: 'member',
        bookRequests: []
    },
    {
        _id: new Types.ObjectId(),
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        password: 'hashedPassword2',
        role: 'librarian',
        bookRequests: []
    },
    {
        _id: new Types.ObjectId(),
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        password: 'hashedPassword3',
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
        member: userSeedData[1]._id,
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
        name: 'Central City Library',
        books: [bookSeedData[0]._id, bookSeedData[1]._id],
        users: [userSeedData[0]._id, userSeedData[1]._id]
    },
    {
        _id: new Types.ObjectId(),
        name: 'Westside Branch Library',
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
