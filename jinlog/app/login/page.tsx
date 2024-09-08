'use client'
const Page = () => {

    const loginToKaKao = () => {
        window.location.href='http://localhost:8080/oauth2/authorization/kakao'
    }
    const loginToGoogle = () => {
        window.location.href='http://localhost:8080/oauth2/authorization/google'
    }

    return(
        <div>
            <h1>Login</h1>
            <div>
                <button onClick={loginToKaKao}>KAKAO</button>
                <button onClick={loginToGoogle}>GOOGLE</button>
            </div>
        </div>
    )
}

export default Page;