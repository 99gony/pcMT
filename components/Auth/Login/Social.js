import React from "react";
import { SocialLoginButton, SocialLoginContainer } from "./style";
import Link from "next/link";
import Image from "next/image";
import { serverAPI } from "../../../store/action/config";
import kakaoLogin from "../../../public/images/kakao_login.png";
import naverLogin from "../../../public/images/naver_login.png";
import facebookLogin from "../../../public/images/facebook_login.png";
import googleLogin from "../../../public/images/google_login.png";

const SocialLogin = () => {
  return (
    <SocialLoginContainer>
      <Link href={`${serverAPI}/auth/kakao`}>
        <a>
          <SocialLoginButton background="#FEE500" fontColor="#191919">
            <div>
              <Image
                src={kakaoLogin}
                height={18}
                width={18}
                objectFit="contain"
              />
            </div>
            <span>로그인</span>
          </SocialLoginButton>
        </a>
      </Link>
      <Link href={`${serverAPI}/auth/naver`}>
        <a>
          <SocialLoginButton background="#03c75a" fontColor="white">
            <div>
              <Image
                src={naverLogin}
                height={14}
                width={14}
                objectFit="contain"
              />
            </div>
            <span>로그인</span>
          </SocialLoginButton>
        </a>
      </Link>
      <Link href={`${serverAPI}/auth/google`}>
        <a>
          <SocialLoginButton background="#FFFFFF" google fontColor="#444">
            <div>
              <Image
                src={googleLogin}
                height={17}
                width={17}
                objectFit="contain"
              />
            </div>
            <span>로그인</span>
          </SocialLoginButton>
        </a>
      </Link>
      <Link href={`${serverAPI}/auth/facebook`}>
        <a>
          <SocialLoginButton background="#4a6eaa" fontColor="white">
            <div>
              <Image
                src={facebookLogin}
                height={24}
                width={24}
                objectFit="contain"
              />
            </div>
            <span>로그인</span>
          </SocialLoginButton>
        </a>
      </Link>
    </SocialLoginContainer>
  );
};

export default SocialLogin;
