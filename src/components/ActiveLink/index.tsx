import { forwardRef, ReactNode } from 'react';
import Box, { BoxProps } from '@/components/Box';
import { useLocation } from 'react-router-dom';
import React from 'react';

interface ActiveLinkProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  activeStyles?: BoxProps;
  isSamePath?: boolean;
  isIncludePath?: boolean;
}

type Ref = HTMLAnchorElement;

const ActiveLink = forwardRef<Ref, ActiveLinkProps & BoxProps>(
  (
    {
      children,
      onClick,
      href,
      activeStyles = {
        color: '#DDE2FF',
      },
      isSamePath,
      isIncludePath,
      ...props
    },
    ref
  ) => {
    const location = useLocation();
    const isActiveStyles = () => {
      if (!isSamePath) {
        return (
          location.pathname.split('?')[0] === href?.split('?')[0] &&
          activeStyles
        );
      }

      if (isIncludePath) {
        return href && location.pathname.includes(href) && activeStyles;
      }

      return (
        (location.pathname === href ||
          decodeURIComponent(location.pathname) === href ||
          (typeof window !== 'undefined' &&
            window.location.pathname === href)) &&
        activeStyles
      );
    };
    return (
      <Box
        ref={ref}
        onClick={onClick}
        href={href}
        {...props}
        {...isActiveStyles()}
      >
        {children}
      </Box>
    );
  }
);

ActiveLink.displayName = 'ActiveLink';

export default ActiveLink;
