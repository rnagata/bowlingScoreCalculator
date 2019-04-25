function scoreCalculator(input){
  let score = 0;
  
  input.forEach((frame, index) => {
    if ((frame.ball_1 + frame.ball_2) < 10){
      score += (frame.ball_1 + frame.ball_2);
    } else if ((frame.ball_1 + frame.ball_2) === 10){
      score += 10;
      score += frame.ball_2;
      if (index === input.length - 1){
        score += ball_3;
      }
    } else if (frame.ball_1 === 10){
      score += frame.ball_1;
      score += frame.ball_2;
      if (index === input.length - 1){
        score += ball_3;
        score += ball_4;
      }
    }
  });
}

module.exports = scoreCalculator;