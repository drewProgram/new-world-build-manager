import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'skills';

  public async up() {
    this.schema.createTable(this.tableName, table => {;
      table.increments('id');
      table.string('idh');
      table.string('name').index();
      table.string('description');
      table.string('icon');
      table.string('category');
      table.string('weapon');
      table.string('tree');
      table.string('row');
      table.string('column');
      table.boolean('ultimate');
      table.boolean('slottable');
      table.string('cooldown');
      table.string('descriptionHtml', 10000);

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
