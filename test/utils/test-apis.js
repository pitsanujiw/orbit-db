const IPFS = require('ipfs')

// Available daemon types are defined in:
// https://github.com/ipfs/js-ipfsd-ctl#ipfsfactory---const-f--ipfsfactorycreateoptions
let jsIpfs = {
  'js-ipfs': {
    type: 'proc', 
    exec: IPFS,
  }
}

const goIpfs = {
  'go-ipfs': {
    type: 'go',
  }
}

// IPFS daemons to run the tests with
let testAPIs = {}

// By default, we only run tests against js-ipfs.
// Setting env variable 'TEST=all' will make tests run with go-ipfs also.
if (process.env.TEST === 'all')
  testAPIs = Object.assign({}, testAPIs, jsIpfs, goIpfs)
else if (process.env.TEST === 'go')
  testAPIs = Object.assign({}, testAPIs, goIpfs)
else
  testAPIs = Object.assign({}, testAPIs, jsIpfs)

module.exports = testAPIs
