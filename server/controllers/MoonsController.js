import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found moons to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const moons = await moonsService.find(req.query)
      return res.send(moons);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found moon to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const moons = await moonsService.findOne({ _id: req.params.id })
      return res.send(moons);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Creates a moon from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body)
      res.send(moon);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await moonsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await moonsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

