export const SHOW_ALL = 'SHOW_ALL';
export const DATE = 'DATE';

export function showAllFilter() {
    return {
        type: SHOW_ALL        
    }
}

export function dateFilter(date) {
    return {
        type: DATE,
        date
    }
}