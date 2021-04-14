import { aliensService } from "../services/AliensService";
import BaseController from "../utils/BaseController";

export class AliensController extends BaseController {
  constructor() {
    super("api/aliens");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found aliens to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const aliens = await aliensService.find(req.query)
      return res.send(aliens);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found alien to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const aliens = await aliensService.findOne({ _id: req.params.id })
      return res.send(aliens);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Creates a alien from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const alien = await aliensService.create(req.body)
      res.send(alien);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await aliensService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await aliensService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}