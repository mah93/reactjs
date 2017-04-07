'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

const Random = mockjs.Random;

// 数据持久化
let tableListData = {};

if (!global.tableListData) {
  const data = mockjs.mock({
    'data|100': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'mobile': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
      'avatar': () => {
        return Random.image('125x125');
      },
      'status|1-2': 1,
      'email': () => {
        return Random.email('visiondk.com');
      },
      'isadmin|0-1': 1,
      'created_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
      'updated_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}

module.exports = {
  'GET /api/users' (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    let newData = tableListData.data.concat();

    if (page.field) {
      const d = newData.filter((item) => {
        return item[page.filed].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length,
      };
    } else {
      data = tableListData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      tableListData.page.current = currentPage * 1;

      newPage = {
        current: tableListData.page.current,
        total: tableListData.page.total,
      }
    }

    setTimeout(() => {
      res.json({
        success: true,
        data,
        page: newPage,
      });
    }, 200);
  },

  'POST /api/users' (req, res) {
    setTimeout(() => {
      const newData = qs.parse(req.body);

      newData.id = tableListData.data.length + 1;
      tableListData.data.unshift(newData);

      tableListData.page.total = tableListData.data.length;
      tableListData.page.current = 1;

      global.tableListData = tableListData;

      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 200);
  },

  'DELETE /api/users' (req, res) {
    setTimeout(() => {
      const deleteItem = qs.parse(req.body);

      tableListData.data = tableListData.data.filter((item) => {
        if (item.id === deleteItem.id) {
          return false;
        }

        return true;
      });

      tableListData.page.total = tableListData.data.length;

      global.tableListData = tableListData;

      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 200);
  },

  'PUT /api/users' (req, res) {
    setTimeout(() => {
      const editItem = qs.parse(req.body);

      tableListData.data = tableListData.data.map((item) => {
        if (item.id === editItem.id) {
          return editItem;
        }
        return item;
      });

      global.tableListData = tableListData;

      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page,
      });
    }, 200);
  },
};