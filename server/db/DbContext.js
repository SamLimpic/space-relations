import ClusterSchema from "../models/Cluster";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import AlienSchema from "../models/Alien";
import mongoose from "mongoose";

class DbContext {
  Clusters = mongoose.model("Cluster", ClusterSchema);

  Stars = mongoose.model("Star", StarSchema);

  Planets = mongoose.model("Planet", PlanetSchema);

  Moons = mongoose.model("Moon", MoonSchema);

  Aliens = mongoose.model("Alien", AlienSchema);
}

export const dbContext = new DbContext();
