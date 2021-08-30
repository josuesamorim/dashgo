import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Forms/input";
import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm, useFormState } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { resolve } from "node:path";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required().email('E-mail obrigatório').email('E-mai inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais'),
})


export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) =>  {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(value);
    }

    return (
        <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
            <Header />

            <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo" {...register('name')} />
                            <Input name="email" label="E-mail" type="email" {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" label="Senha" type="password" {...register('password')} />
                            <Input name="password" label="Confirmação da senha" type="password" {...register('password_confirmation')} />
                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>
                                Salvar
                                </Button>

                        </HStack>

                    </Flex>
                    <Pagination />
                </Box>

            </Flex>

        </Box>
    )
}