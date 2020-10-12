let User = function () {
    this.name = '';
    this.age = 10;

    this.Look = function () {
        // 1. 定义在命名空间内

        // getModelId: OK
        if(Car.ModelId === 1) {
            // setModelId = OK
            Car.ModelId = 2;
        }

        // 2. 定义在命名空间外

        // getState: OK
        if(Car.State === 2) {
            // setState: Failed!
            Car.State = 1;
        }

        // 3. 在命名空间外使用Object.defineProperty定义

        // getCamera: OK
        if(Car.Camera === 1) {
            // setCamera: Failed!
            Car.Camera = 2;
        }

        if(Car.PaintId === 1) {
            Car.PaintId = 2;
        }
    }
}
