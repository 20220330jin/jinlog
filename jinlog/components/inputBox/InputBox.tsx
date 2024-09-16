'use client'

import {ChangeEvent, KeyboardEvent, forwardRef} from "react";

/**
 * 로그인 화면
 */

interface Props {
    title: string;
    placeholder: string;
    type: 'text' | 'password';
    value: string;
    message?: string;
    isErrorMessage?: boolean;
    buttonTitle?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

    const {
        title,
        placeholder,
        type,
        value,
        message,
        isErrorMessage,
        buttonTitle,
        onChange,
        onKeyDown,
        onButtonClick
    } = props;

    const buttonClass = value === '' ? 'flex justify-center items-center border rounded-md w-28 h-10 bg-[#CCCCCC] text-white cursor-default' : 'flex justify-center items-center border rounded-md w-28 h-10 bg-[#FF1828] text-white cursor-pointer hover:bg-[#E31420]';
    const messageClass = isErrorMessage ? 'text-[#FF1828] text-sm' : 'text-blue-400 text-sm'
    console.log(buttonClass)
    console.log(buttonTitle)
    console.log(onButtonClick)


    return (
        // <div className='input-box'>
        //     <div className='input-box-title'>{'아이디'}</div>
        //     <div className='input-box-content'>
        //         <div className='input-box-body'>
        //             <input className='input-box-input'/>
        //             <div className='input-box-button'>{'중복확인'}</div>
        //         </div>
        //         <div className='input-box-message'>{'사용 가능한 아이디입니다.'}</div>
        //     </div>
        // </div>
        <div className='flex flex-col gap-2'>
            <div className='text-gray-400 text-base font-normal leading-none cursor-default'>{title}</div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                    {/* 아이디 입력 부분 */}
                    <input ref={ref}
                           className='outline-none border rounded-2xl py-2 px-4 h-10 bg-white font-normal leading-relaxed placeholder-gray-400 text-base'
                           placeholder={placeholder} type={type} value={value} onChange={onChange}
                           onKeyDown={onKeyDown}/>
                    {/* 로그인 중복체크 버튼 부분 */}
                    {/* 중복체크 버튼 활성 상태: 입력창에 값이 있을 때 활성화, 없을 때, 비활성화 */}
                    {buttonTitle !== undefined && onButtonClick !== undefined && <div
                        className={buttonClass}>{buttonTitle}</div>}
                </div>
                {/* 아이디 중복여부에 따라 다른 색상과 문구를 보여준다. */}
                {message !== undefined &&
                    <div className={messageClass}>{message}</div>
                }
            </div>
        </div>
    )
})

export default InputBox;