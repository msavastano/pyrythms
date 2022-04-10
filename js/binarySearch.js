function assert(outcome, description) {
    var passFail = outcome ? 'pass' : 'fail'
    console.log(passFail, ': ', description)
    return outcome
  }
  
  function recBinarySearch(array, x, low, high){
      // O(log n)
    if (array.length === 0) {
        return false
    }
    if (high >= low) {
        const mid = Math.floor(low + (high - low) / 2)
      if (array[mid] === x) {
          return true
      }
      if (array[mid] > x) {
          return recBinarySearch(array, x, low, mid - 1)
      }
      if (array[mid] < x) {
          return recBinarySearch(array, x, mid + 1, high)
      }
      // return false
    } else {
        return false
    }
  }
  const d = recBinarySearch([1, 2, 3], 8, 0, 2)
  assert(d == false, d)
  const i = recBinarySearch([-1, 2, 3], 3, 0, 2)
  assert(i == true, `neg ${i}`)
  const j = recBinarySearch([-1, 0, 2, 3], 0, 0, 2)
  assert(j == true, `neg ${j}`)
  const e = recBinarySearch([], 8, 0, 0)
  assert(e == false, e)
  const f = recBinarySearch([1, 2, 3], 2, 0, 2)
  assert(f == true, f)
  const g = recBinarySearch([1, 2, 3], 1, 0, 2)
  assert(g == true, g)
  const h = recBinarySearch([1, 2, 3], 3, 0, 2)
  assert(h == true, h)
  const k = recBinarySearch([1, 2, 3, 7, 12], 3, 0, 4)
  assert(k == true, 'k ' + k)
  
  const S = 'abppplee'
  const D = [
    "able",
    "ale",
    "apple",
    "bale",
    "kangaroo"
  ]
  
  function lw(a, b) {
      const mapOfS = {}
      for (let i = 0; i < S.length; i++) {
        if (S[i] in mapOfS) {
          mapOfS[S[i]].push(i)
      } else {
          mapOfS[S[i]] = [i]
      }
    }
    const subS = []
    let longest = 0
    let res = 0
    for (let j = 0; j < D.length; j++) {
        if (D[j].length > longest) {
       let ind = 0
       for (let k = 0; k < D[j].length; k++) {
            if (D[j][k] in mapOfS) {
             
         }
       }
      }
    }
    return mapOfS.e
  }
  
  const ans = lw(S, D)
  assert(ans == 'apple', `exp-- apple  act-- ${ans}`)
  
  const B = {
      city: 'Prov'
  }
  
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(B)))
  
  
  