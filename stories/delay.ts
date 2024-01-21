/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

export const timeout = 2000;

const delay = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), timeout / 2);
  });

export default delay;
