import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { error } from 'node:console';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, useForm } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    
}

 const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref) => {


    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
              name={name}
              type={name}
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
              {...rest}
              ref={ref}
            />
            
          </FormControl>
          
    )
}

export const Input = forwardRef(InputBase);