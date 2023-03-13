type ActionReducerType =ToggleCollapsedACType;

export type stateType={
    collapsed:boolean
}
type  ToggleCollapsedACType=ReturnType<typeof ToggleCollapsedAC>
export const ToggleCollapsedAC=()=>{
    return{ type:"TOGGLE-COLLAPSED",
    payload:{}
    } as const
}
export const reducer = (state: stateType, action: ActionReducerType):stateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {

            return {...state, collapsed:!state.collapsed}
        }
        default:
            return state
    }
}