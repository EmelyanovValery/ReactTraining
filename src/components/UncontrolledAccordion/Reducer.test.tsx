import {reducer, stateType, ToggleCollapsedAC} from "./Reducer";

test("collapsed should be true",()=>{
    const state:stateType={
        collapsed:false
    }
    const newState =reducer(state,ToggleCollapsedAC())
    expect(newState.collapsed).toBe(true)
})
test("collapsed should be false",()=>{
    const state:stateType={
        collapsed:true
    }
    const newState =reducer(state,ToggleCollapsedAC())
    expect(newState.collapsed).toBe(false)
})
