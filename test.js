let jedi = {
  name: 'yoda',
  height: '66cms',
  mass: '17 kgs',
};

Object.keys(jedi).forEach(function (key) {
  // |this| now refers to `jedi`

  console.log(this[key]);
}, jedi); // last arg is `thisArg`
