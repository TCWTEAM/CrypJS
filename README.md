# CrypJS
🔒 Extremely Simple AES-256-CBC Encryption And Decryption

## Install
```
npm install --save crypjs
```

## Example
```
const crypjs = require('crypjs')

let string = "hi"

//has to be a 32 character string
let password = "arandom32bitstring39239483483498"

let encryptedstring = crypjs.encrypt(string, password)
//output = 8c87ea9d402d106803455c0108a23b4a:ad548494a73119d254791efef8c08d07

let decryptedstring = crypjs.decrypt(encryptedstring, password)
//output = hi
```
