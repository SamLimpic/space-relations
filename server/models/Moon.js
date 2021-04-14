import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    planet: { type: ObjectId, ref: 'Planet', required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    imgUrl: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
