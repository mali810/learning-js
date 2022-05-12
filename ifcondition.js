function checkId(age) {
  if (age < 18) {
    return "you cannot apply for id.";
  }

  return "yes you can apply.";
}

let result = checkId(19);
console.log(result);
