var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];

var dataSet = [].concat(data1,data2,data3);
console.log(dataSet);

function mode(dataSet) {
    const frequencyTable = {};
    dataSet.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

    let modes = [];
    let maxFrequency = 0;
    for(const key in frequencyTable) {
        if(frequencyTable[key] > maxFrequency) {
            modes = [Number(key)];
            maxFrequency = frequencyTable[key];
        }
        else if(frequencyTable[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }
    
    if(modes.length === Object.keys(frequencyTable).length) modes = [];

    return modes;
}

var dataCount = 0;

for(i = 0; i < mode(dataSet).length; i++){
    dataCount += mode(dataSet)[i];
}
console.log(`Total data paling banyak keluar adalah: ${mode(dataSet)} dengan jumlah : ${dataCount}0`);