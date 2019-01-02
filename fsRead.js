const fs = require('fs')

var gqlFolderArr
// 读取gql模型文件夹的路径
var absPath = './gql/'
// 读取action文件夹的路径
var actionAbsPath = './action/'
/**
 * Read file buffer to select query and mutation body
 * @author terryzh
 * @param {string} filename 文件名
 */
function readFileBuffer(filename) {
  let gqlSchemaArr = []
  let cacheGqlData = ``
  let cacheGqlArgs = ``
  let readStream = fs.createReadStream(filename)
  let gqlBodyArrs = []
  let fileContent = ``
  readStream.on('open', function(fd) {
    console.log('开始读取文件')
  })
  readStream.on('data', function(data) {
    console.log('读取到数据：')
    cacheGqlData = data.toString()
    cacheGqlArgs = data.toString()
    cacheGqlData = cacheGqlData
      .match(/query (\w+)/g)
      .concat(cacheGqlData.match(/mutation (\w+)/g))
    // ?filter 做数组去假值和空值
    let gqlSchemaArr = cacheGqlData.filter(d=>d).map(params => {
      return params.split(' ')
    })
    let test = cacheGqlArgs.match(/\(\$.+\)/g).map(params => {
      return params.split(/\$(\w+):/g).filter(params => {
        return /^[a-zA-Z]+$/g.test(params)
      })
    })
    for (let i = 0; i < gqlSchemaArr.length; i++) {
      let gqlBodyArr = JSON.parse(JSON.stringify(gqlSchemaArr[i]))
      gqlBodyArr[2] = test[i]
      gqlBodyArrs[i] = gqlBodyArr
    }
    console.log(gqlBodyArrs)
    for (let i = 0; i < gqlBodyArrs.length; i++) {
      const schemaArr = gqlBodyArrs[i]
      fileContent += handleData(schemaArr)
    }
    // 可执行js文件的名字
    let actionFileName = filename.replace(absPath, '').replace('.gql', '.js')
    fs.writeFileSync(actionAbsPath + actionFileName, fileContent)
  })
  readStream.resume()
  readStream.on('end', function() {
    console.log('文件已全部读取完毕')
  })
  readStream.on('close', function() {
    console.log('文件被关闭')
  })
  readStream.on('error', function(err) {
    console.log('读取文件失败')
  })
}

/**
 * read folder path and file name in arr
 * @author terryzh
 * @param {string} path 文件夹路径
 * @param {any[]} filesList 文件路径和文件名的数组
 */
function readFileList(path, filesList) {
  var files = fs.readdirSync(path)
  files.forEach(function(itm, index) {
    var stat = fs.statSync(path + itm)
    if (stat.isDirectory()) {
      //递归读取文件
      readFileList(path + itm + '/', filesList)
    } else {
      var obj = {} //定义一个对象存放文件的路径和名字
      obj.path = path //路径
      obj.filename = itm //名字
      filesList.push(obj)
    }
  })
}

/**
 * handle graphql request data
 * @param {[]} schemaArr ['query', '&&'] or ['mutation', '&&']
 */
function handleData(schemaArr) {
  let useToken = schemaArr[2].indexOf('token')
  let hasToken = ''
  let queryOrMutation = 'queryApollo'
  if (useToken === 0) {
    hasToken = 'token: state.token,'
    schemaArr[2].shift()
  }
  let gqlAction = 
`export const ${schemaArr[1]} = function(
  { commit, state, dispatch },
  ${JSON.stringify(schemaArr[2]).replace(/\"|\[|\]/g, '')}
  ) {
    return ${queryOrMutation}('train', TGql.${schemaArr[1]}, {
      ${hasToken}
      ${JSON.stringify(schemaArr[2]).replace(/\"|\[|\]/g, '')}
    })
  }\n\n`
    if (schemaArr instanceof Array) {
      if (schemaArr[0] === 'query') {
        queryOrMutation = 'queryApollo'
      return gqlAction
    } else if (schemaArr[0] === 'mutation') {
      queryOrMutation = 'mutateApollo'
      return gqlAction
    } else {
      throw '定义类型不是query和mutation~!!!请检查~~'
    }
  }
}
// ! 调用
//获取文件夹下的所有文件
let folders = []
readFileList(absPath, folders)
folders.forEach(async fileObj => {
  gqlFolderArr = readFileBuffer(fileObj.path + fileObj.filename)
})
