check_explore
=============

检测当前使用的浏览器内核及内核的版本.

使用不同的浏览器直接打开index.html文件，然后javascript就会检测当前浏览器使用的渲染引擎以及浏览器的版本，方便我们快速的查看我们使用的是什么浏览器。

在check.js中我们也是来通过遍历进行检测的，获取ua属性，然后对ua属性进行解析，由于各种各样的历史原因，检测起来会比较复杂一些。
```javascript
var ua = navigator.userAgent;
```
