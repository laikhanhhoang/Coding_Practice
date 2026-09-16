/**
 * Cách 1: Factory function trả về object (kiểu "dict" + closure giữ val)
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(val2) {
            if (val === val2) return true;
            throw new Error("Not Equal");
        },
        notToBe: function(val2) {
            if (val !== val2) return true;
            throw new Error("Equal");
        }
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

/**
 * Cách 2: OOP dùng class
 * Class định nghĩa BÊN NGOÀI hàm expect, vì class không phụ thuộc vào val
 * -> không cần tạo lại mỗi lần gọi expect()
 */
class Expect {
    constructor(val) {
        this.val = val;
    }
    toBe(val2) {
        if (this.val === val2) return true;
        throw new Error("Not Equal");
    }
    notToBe(val2) {
        if (this.val !== val2) return true;
        throw new Error("Equal");
    }
}

var expectOOP = function(val) {
    return new Expect(val);
};

/**
 * expectOOP(5).toBe(5); // true
 * expectOOP(5).notToBe(5); // throws "Equal"
 */