import React from 'react';
import * as S from './Styled';
import Link from 'next/link';
import FacebookIcon from '@/components/common/images/ic_facebook.png';
import TwitterIcon from '@/components/common/images/ic_twitter.png';
import InstagramIcon from '@/components/common/images/ic_instagram.png';
import YoutubeIcon from '@/components/common/images/ic_youtube.png';
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
            <Link href="https://www.facebook.com/">
              <S.SnsIcon src={FacebookIcon} alt="Facebook" width={18}/>
            </Link>
            <Link href="https://x.com/">
              <S.SnsIcon src={TwitterIcon} alt="Twitter" width={18}/>
            </Link>
            <Link href="https://youtube.com">
              <S.SnsIcon src={YoutubeIcon} alt="YouTube" width={18}/>
            </Link>
            <Link href="https://instagram.com">
              <S.SnsIcon src={InstagramIcon} alt="Instagram" width={18}/>
            </Link>
          </S.SnsWrap>
        </S.FooterWrap>
      </S.Footer>
    );
}

