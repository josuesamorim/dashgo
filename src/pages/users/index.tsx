import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Tbody, Td, Checkbox, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/Ri';
import { Pagination } from '../../components/Pagination';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Spinner } from '@chakra-ui/core';



export default function UserList() {

    const { data, isLoading, error } = useQuery('users', async () => {
       const response = await fetch('http://localhost:3000/api/users');
       const data = await response.json();

       return data;
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
        

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal" >Usuários</Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Criar novo</Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    )   :
                    error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados</Text>
                        </Flex>
                    ) : (
                        <>
                        <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>

                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                        {data.users.map(user => {
                            return (
                                <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text>{user.name}</Text>
                                        <Text size="sm" color="gray.300">{user.email}</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && (<Td>{user.date}</Td>)}

                            </Tr>
                            )
                        })}

                        </Tbody>

                    </Table>
                    <Pagination />
                        </>
                    )
                }
                </Box>
            </Flex>
        </Box>

    )
}


export async function getServeSideProps<GetServeSideProps>() {

    const response = await fetch('http://localhost/api/users');

    const data = await response.json();


    return {
        props: {
            data
        }
    }
}