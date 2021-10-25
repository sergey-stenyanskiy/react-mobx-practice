function idGenerator() {
  let id = 0;

  return {
    next() {
      return ++id;
    }
  }
}

export const genId = idGenerator();