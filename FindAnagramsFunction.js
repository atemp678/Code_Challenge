

export var allAnagrams = function (str) {
  console.log("string", str);
  var anagrams = {};
  var recurse = function (ana, str) {
    if (str === "") anagrams[ana] = 1;
    for (var i = 0; i < str.length; i++)
      recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
  };
  recurse("", str);
  return Object.keys(anagrams).sort(function (a, b) {
    return b - a;
  });
};

// var arr = input; //declare your number
// var anag = allAnagrams(arr); //send it to the function
// console.log(anag);
