import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'items';

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.string('id');
      table.string('itemType');
      table.string('type');
      table.string('name');
      table.string('description');
      table.string('icon');
      table.string('tier');
      table.string('rarity');
      table.string('gearScore');
      table.string('gearScoreMin');
      table.string('gearScoreMax');
      table.boolean('hasRandomPerks');
      table.string('ignoreNameChanges');
      table.json('perks');
      table.boolean('flagCanBeBought');
      table.boolean('flagNotAvailable');
      table.json('itemClass');

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
