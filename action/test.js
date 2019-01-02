export const orgByCoBo = function(
  { commit, state, dispatch },
  offerId,status
  ) {
    return queryApollo('train', TGql.orgByCoBo, {
      token: state.token,
      offerId,status
    })
  }

export const existOrgCodeOrOrgName = function(
  { commit, state, dispatch },
  pageNo,pageSize,orgName,status,isCheck
  ) {
    return queryApollo('train', TGql.existOrgCodeOrOrgName, {
      token: state.token,
      pageNo,pageSize,orgName,status,isCheck
    })
  }

export const editTaskByCoBo = function(
  { commit, state, dispatch },
  serverNo,serverName,groupId,groupName
  ) {
    return queryApollo('train', TGql.editTaskByCoBo, {
      token: state.token,
      serverNo,serverName,groupId,groupName
    })
  }

export const newServerByTo = function(
  { commit, state, dispatch },
  authorizeId
  ) {
    return queryApollo('train', TGql.newServerByTo, {
      token: state.token,
      authorizeId
    })
  }

export const delServerByTo = function(
  { commit, state, dispatch },
  orgCode,orgName
  ) {
    return queryApollo('train', TGql.delServerByTo, {
      
      orgCode,orgName
    })
  }

