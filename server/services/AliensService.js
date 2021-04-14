import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AliensService {
  async find(query = {}) {
    return await dbContext.Aliens.find(query)
  }

  async findOne(id) {
    let data = await dbContext.Aliens.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Aliens.create(body)
  }
  async edit(body) {
    let data = await dbContext.Aliens.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Aliens.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const cohortsService = new AliensService();