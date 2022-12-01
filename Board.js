export class Board {
    matrix = [];
    constructor(size) {
        this.size = size;
    }
    getMatrix() {
        for (let i = 0; i < this.size; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.matrix[i][j] = 0;
            }
        }
        return this.matrix
    }
}





