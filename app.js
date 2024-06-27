const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); //false เพราะ === ใช้กับobj จะเทียบจากreferenceของobjทั้งสองตัว ถ้าไม่ชี้ไปที่ตัวเดียวกันจะถือว่าfalse
