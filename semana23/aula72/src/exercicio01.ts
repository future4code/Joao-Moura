interface HashString {
  [index: string]: number
}

const isOneEdit = (newString: string, originString: string): boolean => {
  if(
    (newString.length > originString.length + 1) || 
    (newString.length < originString.length - 1) 
  ) return false

  const hashOriginString: HashString = {}
  const hashNewString: HashString = {}

  for(const char of originString){
    if(hashOriginString[char]) {
      hashOriginString[char] += 1
    }else{
      hashOriginString[char] = 1
    }
  }

  for(const char of newString){
    if(hashNewString[char]){
      hashNewString[char] += 1
    } else {
      hashNewString[char] = 1
    }
  }

  let countUndefined: number = 0

  for(const key in hashOriginString){
    if(!hashOriginString[key] || !hashNewString[key]){
      countUndefined++
      if(countUndefined > 1) return false
    }
  }

  return true
}

// TESTES

console.log(isOneEdit("banana", "banana"))  //true
console.log(isOneEdit("banan", "banana"))  //true
console.log(isOneEdit("bananas", "banana"))  //true
console.log(isOneEdit("bananass", "banana"))  //false
console.log(isOneEdit("bana", "banana"))  //false
console.log(isOneEdit("futebol", "bananas"))  //false
console.log(isOneEdit("bananass", "bananas"))  //true