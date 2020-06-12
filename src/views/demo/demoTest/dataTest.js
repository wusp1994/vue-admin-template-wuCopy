//=================================excel解析数据,变换table格式==================================
var data = [
    ["0611測試","0611測試","0611測試","0611測試","0611測試","0611測試","0611測試"]
    ,
    ["0612測試","","0612測試","","0612測試","","0612測試"]
    ,["0613測試","","0613測試","","0613測試","","0613測試"]
    ,["0614測試","","0614測試","","0614測試","","0614測試"]
    ,["0615測試","","0615測試","","0615測試","","0615測試"]
    ,["0616測試","","0616測試","","0616測試","","0616測試"]
    ,["0617測試","","0617測試","","0617測試","","0617測試"]
    ,["0618測試","","0618測試","","0618測試","","0618測試"]
    ,["0619測試","","0619測試","","0619測試","","0619測試"]
]
var excelTableList = []
var tableObj = {"A":"","B":"","C":"","D":"","E":"","F":"","G":""}
data.forEach((one_item, one_index) => {
    let tableObjCopy = Object.assign({}, tableObj);
    one_item.forEach((two_item, two_index) => {
        tableObjCopy[Object.keys(tableObjCopy)[two_index]] = two_item;
    })
    excelTableList.push(tableObjCopy)
})
console.log(excelTableList, "excelTableList")
//=================================excel解析数据,变换table格式==================================