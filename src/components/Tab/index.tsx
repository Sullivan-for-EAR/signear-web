import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box, { BoxProps } from '@/components/Box';
import Flex from '@/components/Flex';
import ActiveLink from '@/components/ActiveLink';

import { ReactComponent as CalendarIcon } from '../../images/icons-calendar.svg';
import { ReactComponent as ReservationIcon } from '../../images/icons-reservation.svg';
import { ReactComponent as UserIcon } from '../../images/icons-user.svg';
import { ReactComponent as SettingIcon } from '../../images/icons-setting.svg';

interface LinkProps {
  href: string;
  text: string;
}

interface IconProps {
  type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  const IconType = type.replace('/', '');
  switch (IconType) {
    case 'reservation':
      return <ReservationIcon />;
    case 'userManage':
      return <UserIcon />;
    case 'interpreterManage':
      return <SettingIcon />;
    default:
      return <CalendarIcon />;
  }
};

const Tab: React.FC<
  { links: LinkProps[]; isSamePath?: boolean } & BoxProps
> = ({ links, isSamePath, ...props }) => {
  const location = useLocation();
  return (
    <Flex flexDirection="column" flex="1" {...props}>
      {links.map(({ text, href }) => {
        const isActiveLink = location.pathname === href;
        return (
          <Flex
            p="18px 0px"
            borderBottom="1px solid #E5E5E5"
            key={text}
            alignItems="center"
          >
            <Box color={isActiveLink ? '#0A84FF' : 'black'}>
              <Icon type={href} />
            </Box>
            <Link to={href}>
              <ActiveLink
                ml="14px"
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
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Tab;
