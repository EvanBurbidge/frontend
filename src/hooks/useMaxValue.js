import { useState } from "react";

export default function useMaxValue() {
    const [maxValue, setValue] = useState(0);
    
    const setMaxValue = max => () => setValue(max);

    const handleValueChange = ({ target: { value = 0 }}) => setValue(value);

    return {
      maxValue,
      setMaxValue,
      handleValueChange,
    };
};
