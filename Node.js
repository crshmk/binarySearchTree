/**
 * @param any
 */
var Node = function(val) {
  this.val = val;
  this.l = undefined;
  this.r = undefined;
}

/**
 * @param Node
 * @param Node
 */
Node.prototype.walkToInsert = function(limb, newNode) {
  if (limb.val > newNode.val) {
    if (limb.l === undefined) {
      limb.l = newNode;
    } else {
      this.walkToInsert(limb.l, newNode)
    }
  } else {
    if (limb.r === undefined) {
      limb.r = newNode;
    } else {
      this.walkToInsert(limb.r, newNode)
    }
  }
}

/**
 * @param any or array of anys
 * recursively calls walkToInsert
 * if passed an array, inserts a new Node for each element
 */
Node.prototype.insert = function(val) {
  return Array.isArray(val) ?
    val.forEach( (v) => this.walkToInsert(this, new Node(v)) ) :
    this.walkToInsert(this, new Node(val))
}

/**
 * @param Node
 * @param any
 * @return boolean
 */
Node.prototype.walkToFind = function(limb, needle) {
  return limb.val === needle ? true :
    limb.l !== undefined && needle < limb.val ? this.walkToFind(limb.l, needle) :
    limb.r !== undefined && needle > limb.val ? this.walkToFind(limb.r, needle) :
    false;
}

/**
 * @param any
 * @return boolean
 * recursively calls walkToFind
 */
Node.prototype.contains = function(val) {
  return this.walkToFind(this, val);
}

/**
 * @param Node
 * @param function
 */
Node.prototype.transform = function(limb, cb) {
  limb.val = cb(limb.val);
  if (limb.l !== undefined) {
    this.transform(limb.l, cb);
  }
  if (limb.r !== undefined) {
    this.transform(limb.r, cb)
  }
}

/**
 * @param function
 * recursively calls transform
 */
Node.prototype.update = function(cb) {
  this.transform(this, cb)
}

module.exports = Node;
