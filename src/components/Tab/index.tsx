import React from 'react';
import { Link } from 'react-router-dom';
import { BoxProps } from '@/components/Box';
import Flex from '@/components/Flex';
import ActiveLink from '@/components/ActiveLink';

interface LinkProps {
  href: string;
  text: string;
}

const Tab: React.FC<
  { links: LinkProps[]; isSamePath?: boolean } & BoxProps
> = ({ links, isSamePath, ...props }) => {
  return (
    <Flex flexDirection="column" flex="1" {...props}>
      {links.map(({ text, href }) => (
        <Link key={text} to={href}>
          <ActiveLink
            p="18px 0px"
            mx="45px"
            borderBottom="1px solid #E5E5E5"
            fontSize="20px"
            fontWeight="500"
            activeStyles={{
              color: '#0A84FF',
            }}
            isSamePath={isSamePath}
            href={href}
          >
            {text}
          </ActiveLink>
        </Link>
      ))}
    </Flex>
  );
};

export default Tab;
