import Context from "./context.js";
import { useReducer } from "react";
import Reducer, {initState} from './reducer'
const Provider = ({children}) => {
    const [state,dispatch] =useReducer(Reducer, initState)

    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider