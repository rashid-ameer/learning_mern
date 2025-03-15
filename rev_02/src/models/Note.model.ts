import { InferSchemaType, model, Schema } from "mongoose";


const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export type TNote = InferSchemaType<typeof noteSchema>;


const NoteModel = model<TNote>("Note", noteSchema);
export default NoteModel;