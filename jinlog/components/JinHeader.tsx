'use client'
import {FcGoogle} from "react-icons/fc";
import React from "react";
import {useRouter} from "next/navigation";

const JinHeader = () => {
    const router = useRouter();
    /**
     * 로고 클릭시 홈화면 이동
     */
    const handleLogo = () => {
        router.push('/')
    }
    /**
     * 메뉴 이동
     */
    const moveMenu = (e: string) => {
        if(e === 'STUDY'){
            router.push('/post/study/list')
        }
    }
    return (
        <header
            className='flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3'>
            <div className='flex items-center gap-4 text-[#0d151c]'>
                <div className='size-4'>
                </div>
                <div className='cursor-pointer' onClick={handleLogo}>
                    <h2
                        className='text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]'>
                        JINLOG
                    </h2>
                </div>
            </div>
            <div className='flex flex-1 justify-end gap-8'>
                <div className='flex items-center gap-9'>
                    <a onClick={(e) => moveMenu(e.currentTarget.textContent || '')} className='text-[#0d151c] text-sm font-medium leading-normal cursor-pointer'>STUDY</a>
                    <a className='text-[#0d151c] text-sm font-medium leading-normal'>TRAVEL</a>
                    <a className='text-[#0d151c] text-sm font-medium leading-normal'>RESTAURANT</a>
                    <a className='text-[#0d151c] text-sm font-medium leading-normal'>TODO</a>
                </div>
                {/*<div><FcGoogle size={30}/></div>*/}
                <div className='flex gap-2'>
                    <button
                        className='flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7eef4] text-[#0d151c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5'>
                        <div>MENU</div>
                    </button>
                    <button onClick={() => router.push('/auth')}
                        className='flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7eef4] text-[#0d151c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5'>
                        <div>LOGIN</div>
                    </button>
                </div>
                <div className='bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10'>

                </div>
            </div>
        </header>
    )
}

export default JinHeader;