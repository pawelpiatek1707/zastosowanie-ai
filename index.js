const fs = require('fs')

fs.readFile('berlin52.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    const splitedArray = data.split('\n').map(el => el.split(' '))
    const innerArray = splitedArray.map(el => el.filter(inner => inner.length > 0).map(el => Number(el)))

    const points = [...innerArray][0][0]
    const finalArray = innerArray.slice(1, innerArray.length - 1)
    const distanceArr = []
    for(let i = 1, j = 0; i < finalArray.length; i++, j++) {
       distanceArr.push(finalArray[i][j])
    }
    distanceArr.push(finalArray[finalArray.length - 1][0])
    const distance = distanceArr.reduce((a, b) => a + b, 0)
    console.log(distance)
})