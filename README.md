# curve25519-js

Curve25519 signatures with X25519 keys.


# Installation

```
npm i curve25519-js
```

# Usage

```js
import { sharedKey } from 'curve25519-js';

const ALICE_PRIV = '77076d0a7318a57d3c16c17251b26645df4c2f87ebc0992ab177fba51db92c2a';
const BOB_PUB = 'de9edb7d7b7dc1b4d35b61c2ece435373f8343c85b78674dadfc7e146f882b4f';

const alicePriv = Uint8Array.from(Buffer.from(ALICE_PRIV, 'hex'));

const bobPub = Uint8Array.from(Buffer.from(BOB_PUB, 'hex'));

const secret = sharedKey(alicePriv, bobPub);

console.log('Secret:', secret)
```

# Functions

### generateKeyPair
Generates a new key pair from the given 32-byte secret seed (which should be generated with a CSPRNG) and returns it as object:
```ts
generateKeyPair(seed: Uint8Array): { 
  private: Uint8Array;
  public: Uint8Array;
}
```

### sharedKey
Returns a raw shared key between own private key and peer's public key (in other words, this is an ECC Diffie-Hellman function X25519, performing scalar multiplication).

The result should not be used directly as a key, but should be processed with a one-way function (e.g. HSalsa20 as in NaCl, or any secure cryptographic hash function, such as SHA-256, or key derivation function, such as HKDF).
```ts
sharedKey(privateKey: Uint8Array, publicKey: Uint8Array): Uint8Array
```


