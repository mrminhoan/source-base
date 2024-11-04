String.prototype.combieKeyUrl = function (...rootPaths: string[]): string {
    const fullPath = rootPaths.join("/") + "/" + this.toString();
    return fullPath.replace(/\/+/g, "/");
};

String.prototype.format = function (...args: string[]): string {
    return this.replace(/{(\d+)}/g, (match: string, number: number) => {
        return typeof args[number] != "undefined" ? args[number] : match;
    });
};

export {};
