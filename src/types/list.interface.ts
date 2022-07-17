export interface Ilist {
    id: number;
    phone: number | null;
    message: string | null;
    date: Date
}

export type AList = Array<Ilist>