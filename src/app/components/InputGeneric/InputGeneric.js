import React from "react";
import { Input } from "@chakra-ui/react";

const InputGeneric = (props) => {
    return (
        <Input
            _focus={{
                borderColor: "initial",
                boxShadow: "none",
            }}
            _focus={{
                backgroundColor: "white",
                boxShadow: "none",
            }}
            backgroundColor="white"
            variant='filled'
            placeholder="Input your wallet Address !"
            size="md"
            {...props}
        />
    );
};

export default InputGeneric;

