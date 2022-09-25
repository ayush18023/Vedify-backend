const { queue } = require('../../database/schemas/client.schema');
const catcher = require('../utils/catcher');
const Features = require('./features.handler');
class CRUD {
  constructor(Model, auth) {
    this.Model = Model;
    this.auth = auth;
  }

  async create(_data, _id) {
    // Check karo Model me koi object id type ki filed hai kya
    // data me check karo ki koi object id type ki filed hai kya
    // if (id) {  find that doc exist or not }
    // if exist then create else throw error

    // data vehicle -> {} yar  [{}]
    // Model vehicle do we have
    //  if(Model vehicle) -> create that doc /
    //  else -> continue
    // create hota agar to  {} usko reference

    const data = {
      ..._data,
      [this.auth]: _id,
    };

    const document = await this.Model.create(data);

    if (!document) {
      throw new Error(`${this.Model.modelName} not created`, 400);
    }

    return {
      status: 'success',
      message: `${this.Model.modelName} created`,
      data: document,
    };
  }

  async read(query, _id) {
    // console.log(query);
    // const q = new Features(this.Model, query)
    //   .filter()
    //   .sort()
    //   .populate()
    //   .select()
    //   .paginate();

    // const documents = await q();

    const documents = await this.Model.find({ [this.auth]: _id });
    if (!documents) {
      return next(new Error(`${this.Model.modelName} not found`, 404));
    }

    return {
      status: 'success',
      message: `${this.Model.modelName} found`,
      data: documents,
    };
  }
}

module.exports = CRUD;
