import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    star: { type: ObjectId, ref: 'Star', required: true },
    name: { type: String, required: true },
    size: { type: String, required: true },
    type: { type: String, required: true },
    imgUrl: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1024px-NASA_Wormball_logo.svg.png" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
