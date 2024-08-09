import React from 'react';
// import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import kakaoLogo from '../assets/images/kakao_login.png';
import naverLogo from '../assets/images/naver_login.png';
import googleLogo from '../assets/images/google_login.png';
import loginLogo from '../assets/images/login_logo.png'

const Login = () => {

  const handleKakaoLogin = () => {
    window.location.href = `https://${process.env.REACT_APP_SERVER_ADDRESS}/oauth2/authorization/kakao`;
  };

  const handleNaverLogin = () => {
    window.location.href = `https://${process.env.REACT_APP_SERVER_ADDRESS}/oauth2/authorization/naver`;
  };

  const handleGoogleLogin = () => {
    window.location.href = `https://${process.env.REACT_APP_SERVER_ADDRESS}/oauth2/authorization/google`;
  };

  return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>Login</h1>
        <div>
          <img src={loginLogo} alt="Kakao Login"
               style={{width: '300px', margin: '10px'}}/>
        </div>
        <div>
          <button onClick={handleKakaoLogin}
                  style={{border: 'none', background: 'none'}}>
            <img src={kakaoLogo} alt="Kakao Login"
                 style={{width: '200px', margin: '10px'}}/>
          </button>
          {/*  네이버 로그인 비활성화 */}
          {/*<button onClick={handleNaverLogin}*/}
          {/*        style={{border: 'none', background: 'none'}}>*/}
          {/*  <img src={naverLogo} alt="Naver Login"*/}
          {/*       style={{width: '200px', margin: '10px'}}/>*/}
          {/*</button>*/}
          <button onClick={handleGoogleLogin}
                  style={{border: 'none', background: 'none'}}>
            <img src={googleLogo} alt="Google Login"
                 style={{width: '200px', margin: '10px'}}/>
          </button>
        </div>
      </div>
  );

};

//새로 수정해야합니다. 시간 남으면 부활할 코드
// const Login = () => {
//   React.useEffect(() => {
//     // Load Kakao SDK script dynamically
//     const kakaoScript = document.createElement('script');
//     kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
//     kakaoScript.async = true;
//     kakaoScript.onload = () => {
//       // Initialize Kakao SDK after it is loaded
//       if (window.Kakao) {
//         window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
//         console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
//       }
//     };
//     document.body.appendChild(kakaoScript);
//
//     // Load Naver SDK script dynamically only if not already loaded
//     // if (!window.naver || !window.naver.LoginWithNaverId) {
//       const naverScript = document.createElement('script');
//       naverScript.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2-nopolyfill.js';
//       naverScript.async = true;
//       naverScript.onload = () => {
//         console.log("Naver SDK loaded");
//       };
//       document.body.appendChild(naverScript);
//     // }
//
//     return () => {
//       // Cleanup: remove scripts if needed
//       document.body.removeChild(kakaoScript);
//       if(naverScript) {
//         document.body.removeChild(naverScript);
//       }
//     };
//   }, []);
//
//   const handleKakaoLogin = () => {
//     window.Kakao.Auth.authorize({
//       redirectUri: process.env.REACT_APP_KAKAO_CALLBACK_URL,
//     });
//   };
//
//   const handleNaverLogin = () => {
//     if (window.naver && window.naver.LoginWithNaverId) {
//       const naverLogin = new window.naver.LoginWithNaverId({
//         clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
//         callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URL,
//         isPopup: true,
//         loginButton: { color: 'green', type: 3, height: 58 },
//         callbackHandle: true,
//       });
//       naverLogin.init();
//
//       // Trigger Naver login
//       naverLogin.getLoginStatus((status) => {
//         if (status) {
//           console.log("Naver User:", naverLogin.user);
//           // Handle successful login here
//         } else {
//           console.error("Naver login failed");
//         }
//       });
//     } else {
//       console.error("Naver SDK not initialized.");
//     }
//   };
//
//   const handleGoogleLogin = (credentialResponse) => {
//     console.log("Google Auth Success:", credentialResponse);
//     // Handle successful login here
//   };
//
//   return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1>Login Page</h1>
//         <div>
//           <button onClick={handleKakaoLogin} style={{ border: 'none', background: 'none' }}>
//             <img src={kakaoLogo} alt="Kakao Login" style={{ width: '200px', margin: '10px' }} />
//           </button>
//           <button onClick={handleNaverLogin} style={{ border: 'none', background: 'none' }}>
//             <img src={naverLogo} alt="Naver Login" style={{ width: '200px', margin: '10px' }} />
//           </button>
//           <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//             <GoogleLogin
//                 onSuccess={handleGoogleLogin}
//                 onError={() => console.error('Google login failed')}
//                 render={(renderProps) => (
//                     <button
//                         onClick={renderProps.onClick}
//                         disabled={renderProps.disabled}
//                         style={{ border: 'none', background: 'none' }}
//                     >
//                       <img src={googleLogo} alt="Google Login" style={{ width: '200px', margin: '10px' }} />
//                     </button>
//                 )}
//             />
//           </GoogleOAuthProvider>
//         </div>
//       </div>
//   );
// };

export default Login;