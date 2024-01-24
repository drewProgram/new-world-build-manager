import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import packageJson from '../../../package.json';

export default class VersionsController {
  public async index({ response }: HttpContextContract) {
    response.json({ name: packageJson.name, version: packageJson.version });
  }
}
