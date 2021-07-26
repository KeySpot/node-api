# KeySpot
Sign up [here]{keyspot.app}

KeySpot is a tool to help manage environment variables for individuals and teams of developers. The service stores environment variables for your project in a centralized place so you don't have to juggle different .env files for your environements and applications. Once you have signed in at [keyspot.app]{keyspot.app}, you can create new records, share them with your team, and access them in code.

# Installation

```
    npm install --save keyspot
```

# Usage

Sign in to [KeySpot]{keyspot.app}, and create a record. At the top of each record's page there is an accessKey. Copy the accessKey as you will be using this to access your environment variables in code.

Accessing your environment in code:
```
 const keyspot = require('keyspot');

 const variables = await keyspot('<accessKey>');
```

Updating your environment in code:
```
 const { update } = require('keyspot');

const newVariables = {
    newVar1: "foo",
    newVar2: "bar"
};

 await update('<accessKey>', newVariables);

```

note: KeySpot also works with ES6:
```
 import keyspot from 'keyspot';

 const variables = await keyspot('<accessKey>');
```

note: You will want to supply your program with your access key as your only environement variable or a command line argument.

As command line argument:
Terminal
```
    node index.js <accessKey> 
```

index.js
```
    const variables = await keyspot(process.argv[2]);
```

As environment variable:
Terminal
```
    ACCESS_KEY=<accessKey>;

    node index.js 
```

index.js
```
    const variables = await keyspot(process.env.ACCESS_KEY);
```

