import keyspot, { update } from './src/index.mjs';

const accessKey = '60fdf3fdb210980ca172eeee';

await update(accessKey, {hello: 'world'});

console.log(await keyspot(accessKey));