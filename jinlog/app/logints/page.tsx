'use client'
import InputBox from "@/components/inputBox/InputBox";
import {ChangeEvent, useState} from "react";

const LoginPageTs = () => {

    const [id, setId] = useState<string>('')

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
    }

    const onIdButtonClickHandler = () => {

    }

    return (
        <div>
            <InputBox title='아이디' placeholder='아이디를 입력해주세요.' type='text' value={id} onChange={onIdChangeHandler}
                      buttonTitle='중복 확인' onButtonClick={onIdButtonClickHandler} message='사용 가능한 아이디 입니다.' isErrorMessage={false}/>
            <div className='primary-button-lg full-width'>회원가입</div>
            <div className='disable-button-lg full-width'>회원가입</div>
            <div className='text-link-lg full-width'>회원가입</div>
            <div className='kakao-sign-in-button'></div>
            <div className='naver-sign-in-button'></div>
        </div>
    )
}

export default LoginPageTs;