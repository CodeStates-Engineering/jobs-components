// eslint-disable-next-line func-names, @typescript-eslint/no-empty-function, no-empty-function
const AsyncFunction = async function () {}.constructor;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isAsync = (fn: Function) => fn instanceof AsyncFunction;
