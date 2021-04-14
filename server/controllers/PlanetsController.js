import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/moons", this.getMoonsByPlanetId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found planets to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const planets = await planetsService.find(req.query)
      return res.send(planets);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found planet to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const planets = await planetsService.findOne({ _id: req.params.id })
      return res.send(planets);
    } catch (error) {
      next(error);
    }
  }
  /**
   * Sends found moons to a client by request provided the Id from params for the planet
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getMoonsByPlanetId(req, res, next) {
    try {
      const moons = await moonsService.find({ planet: req.params.id })
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a planet from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body)
      res.send(planet);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await planetsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await planetsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

