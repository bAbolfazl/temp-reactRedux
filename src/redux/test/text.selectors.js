import { createSelector } from "reselect"

const selectTest = state => state.test

export const selectTestTest = createSelector(
    selectTest,
    test => test.test ? test.test : ''
)