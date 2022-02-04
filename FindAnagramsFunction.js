export const allAnagrams = function (str) {
  const anagrams = {};
  const recurse = function (ana, str) {
    if (str === "") anagrams[ana] = 1;
    for (let i = 0; i < str.length; i++)
      recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
  };
  recurse("", str);
  return Object.keys(anagrams).sort(function (a, b) {
    return b - a;
  });
};
