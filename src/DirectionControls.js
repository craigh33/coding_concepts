import React, { Component } from 'react';
import left_arrow from './images/left_arrow.svg';

class DirectionControls extends Component{

    forwardClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      var board = this.props.boardRef;
      character.moveForward();


      this.findCharOverObj(character,board)
    }

    backClick(e){
        //instance of Character.js injected as property during instantiation
        var character = this.props.characterRef.current;
        var board = this.props.boardRef;
        character.moveBack();

        this.findCharOverObj(character,board)
    }

    leftClick(e){
        //instance of Character.js injected as property during instantiation
        var character = this.props.characterRef.current;
        var board = this.props.boardRef;
        character.moveLeft();

        this.findCharOverObj(character,board)
    }

    rightClick(e){
        //instance of Character.js injected as property during instantiation
        var character = this.props.characterRef.current;
        var board = this.props.boardRef;
        character.moveRight();

        this.findCharOverObj(character,board)
    }

    findCharOverObj(char,board)
    {
        console.log(char);
        console.log(board);

        let letters = ["A","B","C","D","E","F","G","H"];

        let characterPOS = char.state.position;

        let characterPOSAdjusted = {
            x : letters[characterPOS.x -1],
            y : characterPOS.y
        };

        var position = (characterPOSAdjusted.x.toString + characterPOSAdjusted.y.toString);

        if (position in board.setup)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    render(){
        return(
            <div id="directionControls" class="columnLayout">
              <div class="rowLayout">
                <img src={left_arrow} class="arrow backArrow" onClick={(e) => this.backClick(e)}/>
                <div class="columnLayout">
                  <img src={left_arrow} class="arrow" onClick={(e) => this.leftClick(e)}/>
                  <img src={left_arrow} class="arrow forwardArrow" onClick={(e) => this.forwardClick(e)} />
                  <img src={left_arrow} class="arrow rightArrow" onClick={(e) => this.rightClick(e)}/>
                </div>
              </div>
            </div>
        )
    }
}

export default DirectionControls;