import HomePostList from "@/components/HomePostList";
/**
 * 홈 화면 Container
 */

// 유저ID 타입 정의
// TODO (확인필요) (20240808/x) 타입정의 interface로 하는 이유 / 따로 type정의 파일로 뺄지 확인 필요 -hjkim
interface HomeContainerProps {
    userId?: string;
}

const HomeContainer = () => {
    return(
        <div className='px-40 flex flex-1 justify-center rounded-full py-5'>
            {/* 홈 화면 블로그 글 리스트*/}
            <div className='layout-content-container flex flex-col max-w-[960px] flex-1'>
                <div className='flex flex-wrap justify-between gap-3 p-4'>
                    <p className='text-[#0d151c] tracking-light text-[32px] font-bold leading-tight min-w-72'>HOME</p>
                </div>
                <HomePostList/>
            </div>
        </div>
    )
}

export default HomeContainer;