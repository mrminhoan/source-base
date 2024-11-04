import {BaseService} from "@service/axios/common";

export const userService = {
    refreshAccess(data) {
        const url = "auth/refresh";
        return BaseService.post({
            ...data,
            url,
            payload: data.payload
        });
    }
};
