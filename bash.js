const exportsFromPWD = require('./pwd')

const exportsFromLS = require('./ls')

const exportsFromCAT = require('./cat')

process.stdout.write('prompt > ')

exportsFromPWD()
exportsFromLS()
exportsFromCAT()