import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./axios";
console.log(typeof useQuery([]));

export const useGet = (keys:string[], url:string, params?:object):object => {
    return useQuery(keys, ()=>instance.get(`${url}`).then(resp=>resp.data) ,{...params} )
}