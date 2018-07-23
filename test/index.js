const expect = require('chai').expect
const assert = require('chai').assert

const Node = require('../Node')

const util = require('util')

function inspect(x) {
  console.log(util.inspect(x, false, null));
}

describe('Binary Search Tree', function() {
  it('creates a tree instance', function() {
    var bst = new Node(42)
    expect(bst.val).to.equal(42)
    expect(bst.l).to.be.undefined
    expect(bst.r).to.be.undefined
  })

  it('inserts a new node with value lt the root node to the left of the root node', function() {
    var bst = new Node(42)
    bst.insert(41)
    expect(bst).to.have.nested.property('l.val')
    expect(bst.l).to.nested.include({val:41})
  })

  it('insert fn adds multiple nodes when passed an array', function() {
    var bst = new Node(42)
    bst.insert([1,2,3,999])
    expect(bst).to.nested.include({'l.r.val':2})
  })

  it('contains fn returns a boolean checking if the tree has some primitive', function() {
    var bst = new Node(42)
    bst.insert([1,2,3,55,66])
    expect(bst.contains(55)).to.be.true
    expect(bst.contains(2)).to.be.true
    expect(bst.contains(99)).to.be.false
  })

  it('update fn applies a callback to each node', function() {
    var bst = new Node(42)
    bst.insert([1,2,3,55,66])
    bst.update(x => x + 1)
    expect(bst.contains(56)).to.be.true
    expect(bst.contains(4)).to.be.true
    expect(bst.contains(66)).to.be.false
  })
})
