import { RequestHandler } from "express";
import NoteModel from "../models/Note.model";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title: string;
  content?: string;
}

export const createNote: RequestHandler<{}, {}, CreateNoteBody> = async (
  req,
  res,
  next
) => {
  try {
    const { title, content } = req.body;
    const newNote = new NoteModel({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
};
