import { starsService } from "../services/StarsService";
import { clustersService } from "../services/ClustersService";
import BaseController from "../utils/BaseController";

export class ClustersController extends BaseController {
  constructor() {
    super("api/clusters");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarsByClusterId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found clusters to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const clusters = await clustersService.find(req.query)
      return res.send(clusters);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found cluster to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const clusters = await clustersService.findOne({ _id: req.params.id })
      return res.send(clusters);
    } catch (error) {
      next(error);
    }
  }
  /**
   * Sends found stars to a client by request provided the Id from params for the cluster
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getStarsByClusterId(req, res, next) {
    try {
      const stars = await starsService.find({ cluster: req.params.id })
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a cluster from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const cluster = await clustersService.create(req.body)
      res.send(cluster);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await clustersService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await clustersService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

