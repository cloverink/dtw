const services = require('./services')
const {log,clear} = console
const clog = o => { clear(); log(o) }


const run = () => {
  services.dtw()
  const list = services.generateRandomList(20)
  clog(services.drawChart(list))
}

run()
