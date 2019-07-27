import CustomInput from "./CustomInput";
import React, {memo, useState} from "react";
import GlobalStore from "../../../Constants/GlobalStore";

export default memo(({ ...rest }) => {

    const [ secureText, setSecureText ] = useState(true);
    const iconName = secureText ? 'eye-disable' : 'eye';
    return (
        <CustomInput
            icon="lock"
            iconRight={{ size: 16, name: iconName, color: GlobalStore.color.neutral4 }}
            onPressRight={() => setSecureText(!secureText)}
            secureTextEntry={secureText}
            {...rest}
        />
    );
});
