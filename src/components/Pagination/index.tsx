import { Stack, HStack, Box, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "../Pagination/PaginationItem";

export function Pagination() {


    return (
        <Stack justify="space-between" align="center" mt="8" spacing="6" direction={["column", "row"]}>

            <Box>
                <strong>0</strong> - <strong>1</strong> de <strong>3</strong>
            </Box>

            <HStack direction="row" spacing="2">
               <PaginationItem number={1} isCurrent />
               <PaginationItem number={2} />
               <PaginationItem number={3} />
            </HStack>
        </Stack>
    )
}