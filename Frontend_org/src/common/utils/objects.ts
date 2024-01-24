export const deepCopy = (obj: any) => {
    if (typeof obj !== 'object' || obj === null || obj === undefined) {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    if (obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepCopy(item);
            return arr;
        }, []);
    }

    if (obj instanceof Object) {
        return Object.keys(obj).reduce((newObj: any, key) => {
            newObj[key] = deepCopy(obj[key]);
            return newObj;
        }, {});
    }
};

export const cloneObject = (src: Object, dest: Object | null) => {
    if (src === null || dest === null) return;
    Object.entries(src).forEach(([key, value]) => {
        dest[key as keyof typeof src] = value;
    });
};

export const objToArray = (obj: any): [] => {
    if (obj === undefined || obj === null) return [];

    if (!Array.isArray(obj)) {
        const tmp: any = {};
        cloneObject(obj, tmp);
        obj = [];
        obj.push(tmp);
    }

    return obj;
};

export const itemFromArray = (arr: any[], key: string, value: string): any => arr.find((item) => item[key] === value);

export const objFromArray = (arr: any[], key = 'id'): {} => arr.reduce((
    accumulator,
    current
) => {
    accumulator[current[key]] = current;
    return accumulator;
}, {});

export const objSub = (dest: any, src: any) => {
    const { id, title, value, arr, cost } = src;

    if (dest[id] === undefined) dest[id] = {};
    if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
        dest[id].value = value;
        dest[id].id = id;
        dest[id].title = title;
        if (cost !== undefined && cost >= 0) dest[id].cost = cost;
        return;
    }

    if (arr !== undefined) {
        dest[id].value = arr;
        dest[id].id = id;
        if (cost !== undefined && cost >= 0) dest[id].cost = cost;
        return;
    }

    if (dest[id].child === undefined) dest[id].child = {};
    if (cost !== undefined && cost >= 0) dest[id].cost = cost;
    objSub(dest[id].child, value);
};