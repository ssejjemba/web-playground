class Sprite {
    /**
     * 
     * @param {{x: number, y: number}} position 
     * @param {{ width: number, height: number }} size
     * @param {CanvasRenderingContext2D} context
     * @param {{ color?: string }} options
     */
    constructor(position, size, context, options = {}) {
        this.position = position
        this.size = size
        this.context = context
        this.options = options
    }

    draw(){
        this.context.fillStyle = this.options.color
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}