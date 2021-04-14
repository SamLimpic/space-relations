import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ClustersService {
  async find(query = {}) {
    return await dbContext.Clusters.find(query)
  }

  async findOne(id) {
    let data = await dbContext.Clusters.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Clusters.create(body)
  }
  async edit(body) {
    let data = await dbContext.Clusters.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Clusters.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const cohortsService = new ClustersService();