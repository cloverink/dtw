const chart = require('chart')
module.exports = (data) => chart(data, {
  width: 130,
  height: 30,
  // pointChar: '█',
  // negativePointChar: '░'
})
