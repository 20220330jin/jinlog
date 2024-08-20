import QuillEditor from "@/components/QuillEditor";

interface PostData {
    title: string;
    content: string;
}

interface PostWriteFormProps {
    onSubmit: (data: PostData) => void;
}

const PostWriteForm = ({onSubmit}: PostWriteFormProps) => {
    return (
        <div>
            <QuillEditor onSubmit={onSubmit}/>
        </div>
    )
}

export default PostWriteForm;