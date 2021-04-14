import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
  {
    planet: { type: ObjectId, ref: 'Planet', required: true },
    name: { type: String, required: true },
    population: { type: Number, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
