import { useState } from "react"

const useToggle = (value = false) => {
    const [toggle, setToggle] = useState(value);

    const handleToggle = () => {
        setToggle((pve => !pve));

    }

    return {
        toggle, handleToggle
    }

}

export {useToggle}