function reverseBits(n: number): number {
    console.log("N", n)
    let str_n: string = n.toString(2).padStart(32, '0')
    console.log(str_n)
    str_n = str_n.split("").reverse().join("")
    console.log("reversed str", str_n)
    let reversed_num = parseInt(str_n, 2)
    console.log("rev num", reversed_num)
    return reversed_num
};