new Vue({
  el: '#app',
  data: {
      show: true,
      userPick: null,
      randPick: null,
      userScore: 0,
      computerScore: 0,
      turns: []
  },
  methods: {
      choose: function (pick) {
          this.userPick = pick;
          const picks = ['rock', 'paper', 'scissors'];
          this.randPick = picks[Math.floor(Math.random() * picks.length)];
          this.setScore();
      },
      setScore: function () {
          if (this.userPick == 'rock') {
              if (this.randPick == 'paper') {
                  console.log('Computer wins');
                  this.computerScore++;
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Computer Chose Paper | Paper Beats Rock | Computer Wins!'
                  });
                  if(this.computerScore == 10){
                      alert('You Lose!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else if (this.randPick == 'scissors') {
                  console.log('User wins');
                  this.userScore++;
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Computer Chose scissors | Rock Beats scissors | You Wins!'
                  });
                  if(this.userScore == 10){
                      alert('You Win!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else {
                  console.log('Draw');
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Tie!'
                  });
              }
          } else if (this.userPick == 'paper') {
              if (this.randPick == 'rock') {
                  console.log('User wins');
                  this.userScore++;
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Computer Chose Rock | Paper Beats scissors | You Wins!'
                  });
                  if(this.userScore == 10){
                      alert('You Win!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else if (this.randPick == 'scissors') {
                  this.computerScore++;
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Computer Chose scissors | scissors Beats paper | You Lose!'
                  });
                  if(this.computerScore == 10){
                      alert('You Lose!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else {
                  console.log('Draw');
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Tie!'
                  });
              }
          } else  {
              if (this.randPick == 'rock') {
                  console.log('Computer wins');
                  this.computerScore++;
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Computer Chose rock | rock Beats scissors | You Lose!'
                  });
                  if(this.computerScore == 10){
                      alert('You Lose!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else if (this.randPick == 'paper') {
                  console.log('User wins');
                  this.userScore++;
                  if(this.userScore == 10){
                      alert('You Win!');
                      this.userScore = 0;
                      this.computerScore = 0
                  }
              } else {
                  console.log('Draw');
                  this.turns.unshift({
                      isPlayer: false,
                      text: 'Tie!'
                  });

              }
          }
      },
      ComWinAlert: function() {
          alert('Computer Wins, Sorry!');
      },
      UsWinAlert: function() {
          alert('You Win!');
      }


  }
});