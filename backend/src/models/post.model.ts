import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  location: string;
  date: Date;
}

const PostSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model<IPost>('Post', PostSchema);
