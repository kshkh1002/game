import { FRUITS } from "./fruits";

var Engine = Matter.Engine,
Render = Matter.Render,
Render = Matter.Render,
Bodies = Matter.Bodies,
World = Matter.World

const engine = Engine.create();

const render = Render.create({
    engine,
    element : document.body,
    options: {
        wireframes : false,
        background : '#F7F4C8',
        width : 620,
        height : 850,
    }
});
const world = engine.world;

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
    isStatic : true,
    render : { fillStyle : '#E6B143'}
})

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
    isStatic : true,
    render : { fillStyle : '#E6B143'}
})
const gorund = Bodies.rectangle(310, 820, 620, 60, {
    isStatic : true,
    render : { fillStyle : '#E6B143'}
})

const topLine = Bodies.rectangle(310, 150, 620, 2, {
    isStatic : true,
    render : { fillStyle : '#E6B143'}
})


World.add(world, [leftWall, rightWall, gorund, topLine]);


Render.run(render);
Render.run(engine);

function addFruit() {

    const index = 0;

    const fruit = FRUITS[index];

    const body = Bodies.circle(300, 50, fruit.radius, {

        render : {
            sprite : {}
        }
    });
}

addFruit();
