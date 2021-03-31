import testTypes from "./test.types";

export const setTest = (test) => ({
    type: testTypes.SET_TEST,
    payload: test
}) 