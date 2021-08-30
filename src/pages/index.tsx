import { Flex, Stack, FormLabel, Button, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Forms/input'
import { SubmitHandler, useForm, useFormState } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

type SignInFormData = {
email: string;
password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export default function SignIn() {

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const {errors} = formState;

  const handleSignIn: SubmitHandler <SignInFormData> =  async (data) => {

    await new Promise(resolve => (setTimeout(resolve, 2000)))

    console.log(data)
  }

  return (

    <Flex h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Flex as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
          type="email" 
          name="email" 
          label="E-mail" 
          {...register('email', {
            required: 'E-mail obrigatório'
          })} 
          />
          <ErrorMessage errors={errors} name="email" />

          <Input 
          type="password" 
          name="password" 
          label="Senha" 
          {...register('password', {
            required: 'Senha obrigatória'
          })} />
          <ErrorMessage  errors={errors} name="password" />

        </Stack>

        <Button type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >

          Entrar

        </Button>

      </Flex>
    </Flex>

  )
}
