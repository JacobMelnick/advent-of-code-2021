type Board = {
    board: Array<Array<number>>;
    marked: Array<Array<boolean>>;
}

const parsedData = (input: string): {
    boards: Array<Board>;
    randomNums: number[];

}