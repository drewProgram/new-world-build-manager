import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  idh: string;

  @column()
  name: string;
  
  @column()
  description: string;

  @column()
  icon: string;

  @column()
  category: string;

  @column()
  weapon: string;

  @column()
  tree: string;
  
  @column()
  row: string;

  @column()
  column: string;

  @column()
  ultimate: boolean;

  @column()
  slottable: boolean;

  @column()
  cooldown: string;

  @column({columnName: 'descriptionHtml'})
  descriptionHtml: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
