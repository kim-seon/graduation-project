import axios from "axios"

const { Kakao } = window

const LoginWithKakao = () => {
    const scope = 'profile_nickname, account_email'
    
    Kakao.Auth.login({
        scope,
        success: function(response) {
            Kakao.Auth.setAccessToken(response.access_token)
            console.log(Kakao.Auth.getAccessToken())
            
            Kakao.API.request({
                url: '/v2/user/me',
                success: function({ kakao_account }) {
                    console.log(kakao_account)
                    const { email, profile }= kakao_account
                    
                    console.log(email)
                    console.log(profile.nickname)

                    axios({
                        method: 'post',
                        url: '/register',
                        data: {
                            "id": email,
                            "nickname": profile.nickname
                        },
                    }).then((res) => {
                        console.log(res)
                        
                    }).catch((error) => {
                        console.log(error)
                    });
                },
                fail: function(error) {
                    console.log(error)
                },
            });
        },
        fail: function(error) {
            console.log(error)
        },
    });
    return null;
};


export default LoginWithKakao