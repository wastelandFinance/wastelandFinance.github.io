import{i as t}from"./is-typedarray-816496c7.js";var r=t.strict,s=function(e){if(r(e)){var f=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(f=f.slice(e.byteOffset,e.byteOffset+e.byteLength)),f}else return Buffer.from(e)};export{s as t};
