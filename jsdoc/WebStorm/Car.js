// 命名空间的测试

/**
 * Car
 * @namespace
 */
let Car = {
    /**
     * 模型编号
     * @type {number}
     */
    ModelId : 1,

    /**
     * 镜头编号
     * @type {number}
     * @private
     */
    camera : 1,

    /**
     * @private
     * @type {number}
     */
    paintId : 1,

};

/**
 * 状态编号
 * @type {number}
 */
Car.State = 1;

/**
 * 镜头编号
 * @type {number}
 * @name Car#Camera
 */
Object.defineProperty(Car, 'Camera', {
    get() { return this.camera; },
    set(newValue) { this.camera = newValue; },
});

