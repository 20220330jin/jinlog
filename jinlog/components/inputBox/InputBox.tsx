'use client'

import {forwardRef} from "react";

/**
 * 로그인 화면
 */

interface Props {

}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
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
            <div className='text-gray-400 text-base font-normal leading-none cursor-default'>{'아이디'}</div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                    <input className='outline-none border rounded-2xl py-2 px-4 h-7 bg-white font-normal leading-relaxed placeholder-gray-400 text-base' placeholder='아이디를 입력해주세요.'/>
                    <div className='flex justify-center items-center border rounded-md w-28 h-10 bg-[#FF1828] text-white cursor-pointer hover:bg-[#E31420]'>{'중복 확인'}</div>
                </div>
                {/* 아이디 중복여부에 따라 다른 색상과 문구를 보여준다. */}
                <div className='text-blue-400 text-sm'>{'사용 가능한 아이디입니다.'}</div>
                {/*<div className='text-[#FF1828] text-sm'>{'이미 사용중인 아이디입니다.'}</div>*/}
            </div>
        </div>
    )
})

export default InputBox;