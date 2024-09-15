'use client'
import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter, useSearchParams } from "next/navigation";

const KakaoRedirectPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleOAuthKakao = async (code: any) => {
        try {
            const response = await axios.get(`http://localhost:8080/oauth/login/kakao?code=${code}`);
            const data = response.data;
            console.log('handle')
            console.log(response)
            // console.log(data);
            // alert("로그인 성공: " + data);
            // router.push("/success");
        } catch (error) {
            // router.push("/fail");
        }
    };

    useEffect(() => {
        const code = searchParams.get('code');
        console.log("Code:", code);

        if(code) {
            // alert("CODE = " + code);
            handleOAuthKakao(code);
        }
    }, [searchParams]);

    return (
        <div>
            <div>Processing...</div>
        </div>
    );
};

export default KakaoRedirectPage;