import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cluster = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Cluster;
