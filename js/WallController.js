class WallController {
    constructor(config) {
        // create our model
        this.allBricks      = [];

        this.topBound                = ball.height * 3;
        this.wallHeight              = ball.height * 10;
        this.bottomBound             = this.wallHeight + this.topBound;
      
        this.brickWidth              = (env.width - 2) / config.bricksPerRow; // -2 for box borders to show
        this.brickHeight             = Math.min(this.wallHeight / config.rowCount, env.maxBrickHeight);
  
        for (let r = 0; r < config.rowCount; r++) {
            
            for (let c = 0; c < config.bricksPerRow; c++) {



                let brickX              = this.brickWidth * c;
                let brickY              = this.brickHeight * r + this.topBound;      // todo : real y

console.log(this.topBound);



                let brickPoints         = 3;        // todo : need points            
                this.allBricks.push(new Brick(brickX, brickY, this.brickWidth, this.brickHeight, brickPoints));
            }
     
        }

        
    }
    update() {
        // look at all bricks
        for (let i = 0; i < wall.allBricks.length; i++) {

            // test if ball is on brick
            if (this._isAHit(wall.allBricks[i])) {
                this._handleAHit(i);
                continue;
            }
        }
    }

    /**
     * INTERNALS
     */
    _isAHit(brick){

          // ball y inside brick
          if (ball.y >= brick.y && ball.y <= brick.y + brick.height) {
            // so y passed, does x hit?
            if (ball.x >= brick.x && ball.x <= brick.x + brick.width) {
                return true;
            }
        }

        return false;
    }
    _handleAHit(brickIndex) {
        // remove brick from array
        this.allBricks.splice(brickIndex, 1);

        ball.flipVelocityY();
    }


}