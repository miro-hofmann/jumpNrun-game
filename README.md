# jumpNrun Test Chambers

This [p5js](https://p5js.org)-app is sketching
different mechanics and settings
for a jump n run game.

Wanna try it?

-> go to https://miro-hofmann.github.io/jumpNrun-game/ :)

## prerequisites

1. Install node v16.x
2. Clone project
3. Install all dependencies `npm i`

### available `npm` scripts

- run `npm run dev` to start the project on a local server
- run `npm run test` to run the test suite (TBD :) )
- run `npm run lint` to run the linter
- run `npm run build` to create a production build

## project structure

The project has the following structure:

```
.
├── dist   					# created during build
└── src    					# all the source
    ├── app 				# application code
    │   ├── frame      		# ui
    │   │   └── chamber
    │   └── scenes        	# folder for the different scenes
    │       ├── doubleJump
    │       ├── jump
    │       └── wallJump
    └── lib					# library code
        ├── entities    	# entities used in scenes
        └── utils			# general purpose utils

```

## important links

- [p5js reference](https://p5js.org/reference/)
  - usefull for keyboard input: http://keycode.info/
- for physics: [p5.play](https://molleindustria.github.io/p5.play/)
  - _going to be replaced by [MatterJS](https://brm.io/matter-js/)_
- for the different scenes: [p5.sceenmanager](https://github.com/mveteanu/p5.SceneManager/tree/master/gamejs)
- `\\ comments` use [jsdoc](https://devhints.io/jsdoc) standard
- maybe for liquid animation: [meatballs and marching squares](http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/)
