// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2
{
    constructor(length, width, hegiht)
    {
        this.length = length;
        this.width = width;
        this.hegiht = hegiht;
    } 

    volume(){ return this.length * this.width * this.hegiht};
    surfaceArea(){return 2 * (this.length * this.width + this.length * this.hegiht + this.width * this.hegiht)};
}

const cuboid2 = new CuboidMaker2(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(length)
    {
        super(length, length, length);
    }

    cubeVolume(){
        return Math.pow(this.length, 3);
    }

    cubeSuffaceArea(){
        return 6 * this.length * this.width;
    }
}

const cube = new CubeMaker(5);

console.log(cube.cubeVolume());
console.log(cube.cubeSuffaceArea());