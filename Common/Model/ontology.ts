export const AttributeType = [
    'string',
    'number',
    'boolean',
    'address',
    'email',
    'object'
];
export interface Attribute {
    title: string;
    type: string;
    description: string;
    children?: Attribute[];
    hasLimit: boolean;
    minValue?: string;
    maxValue?: string;
    options?: any[];
}

export interface Category {
    id: string; // Unique identifier of the Category
    version: number; // Current version of the Category.
    title: string; // Name of the Category
    slug: string; // User-defined identifier used as a deep-link URL to the related Category
    description: string; // Description of the Category
    ancestors: string[]; // Contains the parent path towards the root Category.
    parent: string;
    orderHint: number; // integer value between 0 and 10 used to order Categories that are on the same level in the Category tree.
    metaTitle: string; // Name of the Category used by external search engines for improved search engine performance.
    metaDescription: string; // Description of the Category used by external search engines for improved search engine performance.
    attributes: Attribute[];
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?:string;
}
