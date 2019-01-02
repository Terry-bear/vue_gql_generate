export const ageGenderStructureByCoGc = function(
  { commit, state, dispatch },
  areaCode
  ) {
    return queryApollo('train', TGql.ageGenderStructureByCoGc, {
      token: state.token,
      areaCode
    })
  }

export const cultureProportionByCoGc = function(
  { commit, state, dispatch },
  areaCode
  ) {
    return queryApollo('train', TGql.cultureProportionByCoGc, {
      token: state.token,
      areaCode
    })
  }

export const ageStructureByCoGc = function(
  { commit, state, dispatch },
  areaCode
  ) {
    return queryApollo('train', TGql.ageStructureByCoGc, {
      token: state.token,
      areaCode
    })
  }

