import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Skill from 'App/Models/Skill';
import Skilldump from '../dump/skillsDump.json';

export default class extends BaseSeeder {
  count = 0;

  public async run() {
    const skill = Skilldump.map(item => ({
      idh: `${item.idh}`,
      name: `${item.name}`,
      description: `${item.description}`,
      icon: `${item.icon}`,
      category: `${item.category}`,
      weapon: `${item.weapon}`,
      tree: `${item.tree}`,
      row: `${item.row}`,
      column: `${item.column}`,
      ultimate: item.ultimate,
      slottable: item.slottable,
      cooldown: `${item.cooldown}`,
      descriptionHtml: `${item.descriptionHtml}`
    }));

    await Skill.createMany(skill);
  }
}
