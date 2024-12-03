// data collected from webpage

let data = document.getElementById('data').innerText

// convert the string -> array
let dataArray = data.split(' ')

// initialize arrays

let list1 = []
let list2 = []

dataArray.forEach((value, index) => {
  if (index % 2 === 0) {
    list1.push(value)
  } else list2.push(value)
})

// sort lists
const sort1 = list1.sort((a, b) => a-b)
const sort2 = list2.sort((a, b) => a-b)

// calculate distance

let totalDistance = 0

for (let i = 0; i < sort1.length; i++) {
  const distance = Math.abs(sort1[i] - sort2[i])
  totalDistance += distance
}

console.log(totalDistance)