import BinaryTreeFunc, { BINARYTREE } from './BST';

const tree: BINARYTREE = BinaryTreeFunc(15);

tree.insert(3);
tree.insert(36);
tree.insert(2);
tree.insert(12);
tree.insert(28);
tree.insert(39);

process.stdout.write('\nInitial Tree In Object Format\n');
console.log(tree);

process.stdout.write('\nShow The Min Branch In Object Format\n');
console.log(tree.min());

process.stdout.write('\nShow The Max Branch In Object Format\n');
console.log(tree.max());

process.stdout.write('\nShow The Size In Object Format\n');
console.log(tree.size());

process.stdout.write('\nDepth First Sort In Order\n');
console.log(tree.depthFirstSortInOrder());

process.stdout.write('\nDepth First Sort Pre-order\n');
console.log(tree.depthFirstSortPreOrder());

process.stdout.write('\nDepth First Sort Post-order\n');
console.log(tree.depthFirstSortPostOrder());

process.stdout.write('\Breadth First Sort\n');
console.log(tree.breadthFirstSort());