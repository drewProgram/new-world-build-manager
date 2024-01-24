import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import axios from 'axios';
import Item from 'App/Models/Item';

export default class extends BaseSeeder {
  count = 0;

  public async run() {
    // let i = 0;
    // let success = true;
    // while (success) {
    //   i += 1;
    //   try {
    //     const req = await axios.get<{ data: Item[] }>(
    //       `https://nwdb.info/db/items/page/${i}.json`
    //     );

    //     await Item.createMany(req.data.data);
    //   } catch (error) {
    //     success = false;
    //   }
    // }
  }
}
