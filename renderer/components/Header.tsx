import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HeaderWrapper = styled.header`
  max-width: 1920px;
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoContainer = styled.div`
  width: 20%;
  height: 100%;

  & > a {
    line-height: 60px;
    font-weight: bold;
    color: black;
  }
`;

const HeaderLinkLists = styled.ul`
  width: 80%:
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const LinkList = styled.li`
`;

const StyledA = styled.a<{ current: boolean; }>`
  color: ${({ current }) => current ? 'blue' : '#616161'};
  cursor: pointer;
`;

function Header () {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <HeaderLogoContainer>
        <Link href='/'>
          <a> 홈페이지 </a>
        </Link>
      </HeaderLogoContainer>
      <HeaderLinkLists>
        <LinkList>
          <Link href='/login'>
            <StyledA current={router.pathname === '/login'}> 로그인 </StyledA>
          </Link>
        </LinkList>
        <LinkList>
          <Link href='/signup'>
            <StyledA current={router.pathname === '/signup'}> 회원가입 </StyledA>
          </Link>
        </LinkList>
      </HeaderLinkLists>
    </HeaderWrapper>
  );
}

export default Header;