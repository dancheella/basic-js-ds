// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {


  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.treeRoot) {
      this.treeRoot = newNode;
      return this;
    }

    let currentNode = this.treeRoot;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return this;
      }
    }
  }

  has(data) {
    let currentNode = this.treeRoot;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.treeRoot;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
    return this;
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const minRight = this.findMin(node.right);
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);

    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else {
      node.right = this.removeNode(node.right, data);
    }

    return node;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    const minNode = this.findMin(this.treeRoot);
    return minNode ? minNode.data : null;
  }

  findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  max() {
    const maxNode = this.findMax(this.treeRoot);
    return maxNode ? maxNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};