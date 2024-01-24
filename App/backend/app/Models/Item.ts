import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  itemType: string;

  @column()
  type: string;

  @column()
  name: string;

  @column()
  description: string;

  @column()
  icon: string;

  @column()
  tier: string;

  @column()
  rarity: string;

  @column()
  gearScore: string;

  @column()
  gearScoreMin: string;

  @column()
  gearScoreMax: string;

  @column()
  hasRandomPerks: boolean;

  @column()
  ignoreNameChanges: string;

  @column()
  perks: {
    id: string;
    type: string;
  }[];

  @column()
  flagCanBeBought: boolean;

  @column()
  flagNotAvailable: boolean;

  @column()
  itemClass: string[];

  @column()
  descriptionHtml: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
