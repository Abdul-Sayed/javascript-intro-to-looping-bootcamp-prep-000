function forLoop(arr) {
  for (let i = 1; i < 26; i++) {
    if (i === 1) {
      arr.push(`I am ${i} strange loop.`)
    } else arr.push(`I am ${i} strange loops.`)
  }
}