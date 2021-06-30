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
            p="18px 47px"
            color="#A4A6B3"
            activeStyles={{
              color: '#DDE2FF',
              borderLeft: '2px solid',
              backgroundColor: 'rgba(159, 162, 180, 0.08)',
              padding: '18px 38px',
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
