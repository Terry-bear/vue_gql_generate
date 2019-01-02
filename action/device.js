export const versionInfo = function(
  { commit, state, dispatch },
  devicePackage
  ) {
    return queryApollo('train', TGql.versionInfo, {
      token: state.token,
      devicePackage
    })
  }

export const deviceNameByCoBo = function(
  { commit, state, dispatch },
  
  ) {
    return queryApollo('train', TGql.deviceNameByCoBo, {
      token: state.token,
      
    })
  }

export const deviceVersionUrlByCoBo = function(
  { commit, state, dispatch },
  deviceVersionInput
  ) {
    return queryApollo('train', TGql.deviceVersionUrlByCoBo, {
      token: state.token,
      deviceVersionInput
    })
  }

export const deviceByCoBo = function(
  { commit, state, dispatch },
  devicePackage
  ) {
    return queryApollo('train', TGql.deviceByCoBo, {
      
      devicePackage
    })
  }

export const deviceVersionByCoBo = function(
  { commit, state, dispatch },
  
  ) {
    return queryApollo('train', TGql.deviceVersionByCoBo, {
      token: state.token,
      
    })
  }

export const deviceVersionUrlByCoBo = function(
  { commit, state, dispatch },
  pageNo,pageSize,devicePackage,key
  ) {
    return queryApollo('train', TGql.deviceVersionUrlByCoBo, {
      token: state.token,
      pageNo,pageSize,devicePackage,key
    })
  }

export const updateApp = function(
  { commit, state, dispatch },
  devicePackage
  ) {
    return queryApollo('train', TGql.updateApp, {
      
      devicePackage
    })
  }

