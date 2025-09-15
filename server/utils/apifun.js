const { all } = require("../routes/productRoute");

class Apifun {
  // {
  //     query=ProductModel.find()
  //     queryStr={
  //         "a":"xyz"
  //     }
  // }
  // creates the instance for this class
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
  }

  // Search api functionality method

  search() {
    let keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });

    return this;
  }

  //   filter api functionality method

  filter() {
    let updatekeywords = { ...this.queryStr };
    const filterdata = ["keyword", "limit", "pageno"];

    filterdata.forEach((e) => delete updatekeywords[e]);

    this.query = this.query.find(updatekeywords);

    return this;
  }

  // pagination api functionality

  pagination(itemperPage) {
    let pageno = Number(this.queryStr.pageno) || 1;

    let skip = itemperPage * (pageno - 1);

    this.query = this.query.limit(itemperPage).skip(skip);

    return this;
  }
}

module.exports = Apifun;
