//通過alloc的方式創建Buffer

const buffer = Buffer.alloc(8)
console.log(buffer)

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer)