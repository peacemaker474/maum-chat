import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  max-width: 1920px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

function Header () {
  return (
    <HeaderWrapper>
      <Link href='/'>
        <a> 홈페이지 </a>
      </Link>
      <Link href='/login'>
        <a> 로그인 </a>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;