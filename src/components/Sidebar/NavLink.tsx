import { Icon, Link as ChakraLink, Text, LinkProps, Link } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    children: string;
    icon: ElementType;
    href: string;
  
}

export function NavLink({ icon, href, children, ...rest}: NavLinkProps) {
    return (
      
        <ActiveLink href={href} passHref>
        <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="md">{children}</Text>
        </ChakraLink>
        </ActiveLink>
     
        
    )
}