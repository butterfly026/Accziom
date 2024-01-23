export interface FileThread {
    id:       string;
    title:     string;
    filename:       string;
    size:           number;
    description:    string;
    creator:        any;
    agent:          any;
    fileurl:        string;
    publishurl:     string;
    enckey:         string;
    invitees:       any;
    inviteeAgents: any;
    signinfo:       number;
    hashInfo:       string[];
    signedAt:       number[];
    myHashInfo: string;
    meSignedAt: number;
    inviteenum:     number;// number of invitees
    signednum:      number;// number of invitees who signed
    isDone:         boolean;// all-signed
    isPublished:    boolean;
    createdAt?:      Date | string;
    isPrivate:      boolean;
    uploadTarget?:   number;// is IPFS = 1 or AWS = 2
    publishStatus?:  string;
    publishedAt?:  Date | string;
    updatedAt?:  Date | string;
}
export interface Fileshare {
    id: string;
    threadId: string;
    from: any;
    to: any;
    agent: any;
    sharedAt: Date | string;
    isDeleted: boolean;
}

export interface FileManage {
    userId: string;
    favorite: string[];
    folders: any[];
    files: any[];
    quickAccess: string[];
}
