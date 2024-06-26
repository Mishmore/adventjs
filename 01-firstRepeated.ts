const findFirstRepeated = (gifts: number[]) => {
  /**
   * Initial
   */
  // let firstRepeatedIndex;

  //  for (let i = 0; i < gifts.length - 1; i++) {
  //   const repeatedValueIndex = gifts.findIndex((elm, index) => elm == gifts[i] && index != i)

  //   if (repeatedValueIndex != -1 && i < repeatedValueIndex) {

  //     console.log(repeatedValueIndex)
  //     if (!firstRepeatedIndex) {
  //       firstRepeatedIndex = repeatedValueIndex;
  //     } else if (firstRepeatedIndex && repeatedValueIndex < firstRepeatedIndex) {
  //             firstRepeatedIndex = repeatedValueIndex;
  //     }

  //   }
  //  }

  //   return gifts[firstRepeatedIndex] ?? -1

  /**
   * Refactored
   */
  const seen = new Set();

  for (let i = 0; i < gifts.length; i++) {
    if (seen.has(gifts[i])) return gifts[i];
    seen.add(gifts[i]);
  }

  return -1;
};
