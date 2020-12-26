export enum Types {
    TALK,
    OTHER,
    BREAK,
    LUNCH,
}

export default interface Event {
    order: number;
    time: string;
    type: Types;
    title: string;
}