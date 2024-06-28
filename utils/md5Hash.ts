import { md5 } from 'js-md5';

const privateHashCreator = (...args: Array<string | number>) => {
  return md5(args.join(''))
}

export {
  privateHashCreator
}