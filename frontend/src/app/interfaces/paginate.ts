export interface Paginate<T> {
    items: T[];
    total_count: number;
    paginate_info: {
        has_next: boolean;
        has_previous: boolean;
        next_cursor: string | null;
        prev_cursor: string | null;
    };
}

export interface QueryParamsPlayers {
    limit?: number,
    after?: string,
    before?: string,
    long_name?: string,
    nationality_name?: string,
    club_name?: string,
}