import mongoose, { isValidObjectId } from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    cluster: { type: ObjectId, ref: 'Cluster', required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
