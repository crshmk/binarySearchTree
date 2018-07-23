Javascript Binary Search Tree
---

```javascript
var Node = require('./Node')

var bst = new Node(42)

bst.insert(1)

bst.insert([3, 43, 44])

bst.contains(3)
// true

bst.update(x => x + 1)

bst.contains(3)
// false

bst.contains(4)
// true
```
