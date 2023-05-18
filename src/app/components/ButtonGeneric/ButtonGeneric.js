import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "./style.module.scss";
const ButtonGeneric = ({ children, colorScheme = "facebook", ...props }) => {
    return (
        <Button className={styles.buttonStyle} colorScheme={colorScheme} {...props}>
            {children}
        </Button>
    );
};

export default ButtonGeneric;