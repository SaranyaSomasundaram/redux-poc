export const increment = () => {
    return {
        type: "increment"
    }
}

export const decrement = () => {
    return {
        type: "decrement"
    }
}

export const addname = (param) => {
    return {
        type: "addname",
        name: param
    }
}


