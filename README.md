# vue_gql_generate
基于nodejs输出的gql模型文件转js接口文件

Generate queries from graphql schema, used for writing api test.

## Example
```gql
# Sample query generated
query confByMeByToken($token: String!) {
    confByMeByToken(token: $token){
        conferenceId
        confTitle
        confName
        createTime
        updateTime
    }
}
```

## Usage
```bash

# Generate sample queries from schema file
node fsRead.js
```

can be found in the destDir: [`./gql`](./gql).


You can require the queries like this:

```js
export const confByMeByToken = function(
  { commit, state, dispatch },
  
  ) {
    return queryApollo('train', TGql.confByMeByToken, {
      token: state.token,
      
    })
  }

export const confStatisticsByMe = function(
  { commit, state, dispatch },
  
  ) {
    return queryApollo('train', TGql.confStatisticsByMe, {
      token: state.token,
      
    })
  }
```

## Usage example

Say you have a graphql schema like this: 

```gql
query versionInfo($token: String!, $devicePackage: String!) {
  deviceCodeByCoBo(token: $token, devicePackage: $devicePackage)
}
```

Before this tool, you write graphql api test like this:

```js
export const versionInfo = function(
  { commit, state, dispatch },
  devicePackage
  ) {
    return queryApollo('train', TGql.versionInfo, {
      token: state.token,
      devicePackage
    })
  }
```


## Notice

As this tool is used for test, it expends all the fields in a query. And as we know, there might be recursive field in the query.
