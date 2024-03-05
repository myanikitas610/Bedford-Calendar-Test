const csvFilePath='/Users/myanikitas/Desktop/Bedford Calendar Test/test.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

})