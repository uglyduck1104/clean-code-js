function loginService(isLogin, user) {
  // Early Return
  /*
	함수를 미리 종료
	사고하기 편함
  */
  if (!isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();
  return "로그인 성공";
}
