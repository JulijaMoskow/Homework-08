export function isUsernameValid(username: string): boolean {
    return username.length >= 3;
}

export function isCommentValid(comment: string): boolean {
    return comment.length > 0;
}

export function calculateCredit(income: number, debt: number): number {
    if (debt > 0) {
        return 0;
    }

    return income * 0.6;
}