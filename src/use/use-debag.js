import cellObject from '@/components/classes/cellObject'
import treeObject from '@/components/classes/treeObject'

export const useDebag = () => {
  function throwError(erroMessage, trees, tree) {
    console.log('trees :>> ', trees);
    console.log('tree :>> ', tree);
    throw new Error(erroMessage);
  }

  function isAnyCellAtBottom(tree, fieldCellsHeight, trees) {
    let isAtBottom = false
    tree.cells.forEach(cell => {
      if (cell.j === fieldCellsHeight - 1 || cell.isCellFalling === true) {
        isAtBottom = true
      }
      if (!isAtBottom) {
        throwError('no cell on bottom', trees, tree)
      }
    })
  }

  function isCellsParentRight(tree, trees) {
    tree.cells.forEach(cell => {
      if (cell.parentTree.id !== tree.id) {
        console.log('tree.id :>> ', tree.id);
        console.log('cell.parentTree.id :>> ', cell.parentTree.id);
        throwError('cell.parentTree !== tree.id', trees, tree)
      }
    })
  }

  function isInstanceOfCells(tree, trees) {
    tree.cells.forEach(cell => {
      const isInstance = cell instanceof cellObject
      if (!isInstance) {
        console.log('isInstance :>> ', isInstance);
        throw new Error("Cell have wrong class", trees, tree);
      }
    })
  }

  function isInstanceOfTree(tree, trees) {
    const isInstance = tree instanceof treeObject
    if (!isInstance) {
      console.log('isInstance :>> ', isInstance);
      throw new Error("Tree have wrong class", trees, tree);
    }
  }

  return {
    isAnyCellAtBottom,
    isCellsParentRight,
    isInstanceOfCells,
    isInstanceOfTree,
  }
}

export default useDebag
