import React from 'react';
import * as S from './Styled';
export default function Footer() {
    return (
        <S.Footer>
        <S.FooterWrap>
          <span>©codeit - 2024</span>
          <S.FooterCenter>
            <S.FooterLink href="/privacy">Privacy Policy</S.FooterLink>
            <S.FooterLink href="/faq">FAQ</S.FooterLink>
          </S.FooterCenter>
          <S.SnsWrap>
            <a href="https://www.facebook.com/">
              <S.SnsIcon src="./img/icon/ic_facebook.png" alt="Facebook" />
            </a>
            <a href="https://x.com/">
              <S.SnsIcon src="./img/icon/ic_twitter.png" alt="Twitter" />
            </a>
            <a href="https://youtube.com">
              <S.SnsIcon src="./img/icon/ic_youtube.png" alt="YouTube" />
            </a>
            <a href="https://instagram.com">
              <S.SnsIcon src="./img/icon/ic_instagram.png" alt="Instagram" />
            </a>
          </S.SnsWrap>
        </S.FooterWrap>
      </S.Footer>
    );
}

