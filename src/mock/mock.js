import Mock from 'mockjs'
import db from './db.js'

for (var key in db) {
  Mock.mock(db[key].reg, /post|get/i, db[key].data)
}

export default Mock
