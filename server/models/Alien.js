import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Alien = new Schema(
  {
    planet: { type: ObjectId, ref: 'Planet', required: true },
    name: { type: String, required: true },
    population: { type: Number, required: true },
    type: { type: String, required: true },
    imgUrl: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1024px-NASA_Wormball_logo.svg.png" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Alien;
