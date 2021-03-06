//=================================excel解析数据,变换table格式==================================
var data = [
    ["0611測試", "0611測試", "0611測試", "0611測試", "0611測試", "0611測試", "0611測試"]
    ,
    ["0612測試", "", "0612測試", "", "0612測試", "", "0612測試"]
    , ["0613測試", "", "0613測試", "", "0613測試", "", "0613測試"]
    , ["0614測試", "", "0614測試", "", "0614測試", "", "0614測試"]
    , ["0615測試", "", "0615測試", "", "0615測試", "", "0615測試"]
    , ["0616測試", "", "0616測試", "", "0616測試", "", "0616測試"]
    , ["0617測試", "", "0617測試", "", "0617測試", "", "0617測試"]
    , ["0618測試", "", "0618測試", "", "0618測試", "", "0618測試"]
    , ["0619測試", "", "0619測試", "", "0619測試", "", "0619測試"]
]
var excelTableList = []
var tableObj = {"A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": ""}
data.forEach((one_item, one_index) => {
    let tableObjCopy = Object.assign({}, tableObj);
    one_item.forEach((two_item, two_index) => {
        tableObjCopy[Object.keys(tableObjCopy)[two_index]] = two_item;
    })
    excelTableList.push(tableObjCopy)
})
console.log(excelTableList, "excelTableList")
//=================================excel解析数据,变换table格式==================================


export const tableData = [
    {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }
]

export const tableDataTree = [
    {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [
            {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 41,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 42,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 456,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 1313,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 343,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 111,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 3241,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
        ]
    },
    {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        children: [
            {
                id: 33,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 34,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }
        ]
    },
    {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [
            {
                id: 35,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 36,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }
        ]
    },
    {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        children: [
            {
                id: 37,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 38,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }
        ]
    }
]
export const tableDataTree1 =  [
    {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    },
    {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    },
    {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        hasChildren: true,
        children: [
            {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            },
            {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }
        ]
    },
    {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]