import * as React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
} from "@chakra-ui/react"

export default function FormControlChakra() {
    return (
        <ChakraProvider>
            <div className="FormControlUiKit">
                <ChakraProvider>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                        <FormHelperText>Enter your mail correctly</FormHelperText>
                    </FormControl>
                </ChakraProvider>
            </div>
        </ChakraProvider>
    )
}
