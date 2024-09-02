import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { BookModel, BookRequestModel, UserModel } from "../lib/mongoose/models";

export class BookRequestsController extends BaseController {
    /**
     * index
     */
    public async index(req: Request, res: Response) {
        const { page = 1, pageSize = 10, status, bookId, memberId } = req.query;

        const whereParams: {status?: string, bookId?: string, memberId?: string} = {};
        if (status) whereParams.status = status as string;
        if (bookId) whereParams.bookId = bookId as string;
        if (memberId) whereParams.memberId = memberId as string;

        try {
            const bookRequests = await BookRequestModel.where(whereParams)
            .skip((Number(page) - 1) * Number(pageSize))
            .limit(Number(pageSize)).populate('book').populate('member').exec();

            res.status(200).json(bookRequests);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * async create
     */
    public async create(req: Request, res: Response) {
        const { bookId, memberId, requestDueDate, status } = req.body;

        try {
            // Check if the book and member exist
            const foundBook = await BookModel.findById(bookId);
            const foundMember = await UserModel.findById(memberId);

            if (!foundBook || !foundMember) {
                return res.status(404).json({ message: 'Book or Member not found' });
            }

            const newBookRequest = new BookRequestModel({
                book: bookId,
                member: memberId,
                requestDueDate,
                status: 'submitted',
            });

            await newBookRequest.save();

            // Add the book request to the member's bookRequests array
            foundMember.bookRequests.push(newBookRequest._id);
            await foundMember.save();

            res.status(201).json(newBookRequest);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * update
     */
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { bookId, memberId, requestDueDate, status } = req.body;

        try {
            const updatedBookRequest = await BookRequestModel.findByIdAndUpdate(
                id,
                { book: bookId, member: memberId, requestDueDate, status },
                { new: true } // Returns the updated book request
            ).populate('book member');

            if (!updatedBookRequest) {
                return res.status(404).json({ message: 'Book Request not found' });
            }

            res.status(200).json(updatedBookRequest);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }

    /**
     * delete
     */
    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const bookRequest = await BookRequestModel.findById(id).populate('member');
            if (!bookRequest) {
                return res.status(404).json({ message: 'Book Request not found' });
            }

            // Remove the book request from the member's bookRequests array
            if (bookRequest.member) {
                const member: any = bookRequest.member;
                member.bookRequests = member.bookRequests.filter(
                    (requestId: any) => !requestId.equals(id)
                );
                await member.save();
            }

            await BookRequestModel.findByIdAndDelete(id);

            res.status(200).json({ message: 'Book Request deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }

    }
}
