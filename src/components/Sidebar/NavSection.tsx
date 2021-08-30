import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiDashboardLine } from "react-icons/Ri";

interface NavSectionProps {
    sectionTitle?: string;
    children?: ReactNode;

}

export function NavSection({sectionTitle, children} : NavSectionProps) {
    return (
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">{sectionTitle}</Text>
        <Stack spacing="4" mt="8" align="stretch">
        {children}
        </Stack>
    </Box>
    )
}