export const fetchJSON = (url: RequestInfo, config?: RequestInit) => {
    return fetch(url, config).then(async (res: Response) => {
        if (res.ok) return res.json();
        const error = await res.json();
        return Promise.reject(error);
    });
};
