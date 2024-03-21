function manufacture(gifts: string[], materials: string) {
  const utilsSet = new Set<string>(materials);
  const listOfGifts: string[] = [];

  const isSubsetOf = (subset: Set<string>, supereset: Set<string>) => {
    for (const item of subset) {
      if (!supereset.has(item)) {
        return false;
      }
    }
    return true;
  };

  gifts.map((gift) => {
    const giftSet = new Set<string>(gift);
    if (isSubsetOf(giftSet, utilsSet)) listOfGifts.push(gift);
  });

  return listOfGifts;
}
