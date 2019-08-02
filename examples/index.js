const crypto = require('crypto');
const sharedKey = require('../lib/index.js').sharedKey;
const generateKeyPair = require('../lib/index.js').generateKeyPair;

const ALICE_PRIV = '77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a';
const BOB_PUB = 'de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f';

const alicePriv = Uint8Array.from(Buffer.from(ALICE_PRIV, 'hex'));

const bobPub = Uint8Array.from(Buffer.from(BOB_PUB, 'hex'));

const secret = sharedKey(alicePriv, bobPub);

const keyPair = generateKeyPair(crypto.randomBytes(32));
const privKey = Buffer.from(keyPair.private).toString('hex');
const pubKey = Buffer.from(keyPair.public).toString('hex')

console.log('Secret:  ', Buffer.from(secret).toString('hex'))
console.log('Private: ', privKey)
console.log('Public:  ', pubKey)