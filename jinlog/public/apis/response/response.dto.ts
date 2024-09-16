import {ResponseCode, ResponseMessage} from "@/public/types/enums";

export default interface ResponseDto{
    code: ResponseCode;
    message: ResponseMessage;
}