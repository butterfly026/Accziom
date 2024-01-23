export interface AnzicCategory {
    id: string;
    type: number;
    code: string;
    division: string;
    subdivision: string;
    group: string;
    class: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
