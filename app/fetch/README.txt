get / post 数据

1、fetch使用方式
import Fetch from './fetch/Fetch'

const result = Fetch.post('hero/queryList',{pageSize:10,pageNum:1})
result.then( (json) => {
    console.log(json)
})

const result2 = Fetch.get('hero/query',{id:4});

result2.then( (json) => {
    console.log(json)
})