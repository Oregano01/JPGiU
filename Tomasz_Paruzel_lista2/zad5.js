function BST(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
}

BST.prototype[Symbol.iterator] = function* () {
    if (this.left)
        yield* this.left;
    yield this.key;
    if (this.right)
        yield* this.right;
}

let tree = new BST(10, new BST(6, new BST(5, null, new BST(4, new BST(29, null, null), null)), new BST(33, new BST(7, null, null), null)))

for (let x of tree)
    console.log(x)