import {IoShareSocialOutline} from "react-icons/io5";
import {useCopyToClipboard} from "usehooks-ts";

const TodoList = ({sharedUserFullName = '', ownerUserId = ''}) => {
    /****/
    const [copiedText, copy] = useCopyToClipboard();
    /**
     * 임시 함수
     */
    const handleCopy = () => {
        const shareLink = `${'todoListlink'}/share/${ownerUserId}`
        copy(shareLink)
            .then(() => {
                console.log('copied', {shareLink})
            })
            .catch((error) => {
                console.log('copy error', {error})
            })
    }
    return (
        <section className='min-h-[70vh] bg-amber-100'>
            <div className='w-full max-w-[800px] p-[20px] mx-auto'>
                <article className='flex flex-row justify-between items-center'>
                    <div className='font-bold text-[32px]'>
                        {sharedUserFullName && <div>{sharedUserFullName}</div>}
                        Things to do
                    </div>
                    <div onClick={() => handleCopy()} className='flex flex-row items-center cursor-pointer'>
                        Share <IoShareSocialOutline/>
                    </div>
                </article>
            </div>
        </section>
    )

}

export default TodoList;