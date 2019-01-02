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

export const nonArrLateStatisticsByMe = function(
  { commit, state, dispatch },
  pageNo,pageSize,status,dateTime
  ) {
    return queryApollo('train', TGql.nonArrLateStatisticsByMe, {
      token: state.token,
      pageNo,pageSize,status,dateTime
    })
  }

export const actualAttendancePersonByMe = function(
  { commit, state, dispatch },
  pageNo,pageSize,dateTime
  ) {
    return queryApollo('train', TGql.actualAttendancePersonByMe, {
      token: state.token,
      pageNo,pageSize,dateTime
    })
  }

