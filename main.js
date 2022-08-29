// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

// After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.



const team = {
    _players: [
      {firstName:'Noah',lastName:'Akkad',age:40},
      {firstName:'Maram',lastName:'Tahan',age:35},
      {firstName:'Gabreil',lastName:'Akkad',age:8}
      ],
    _games: [
      {opponent: 'Vit',teamPoints: 35,opponentPoints: 3},
      {opponent: 'red',teamPoints: 40,opponentPoints: 10},
      {opponent: 'black',teamPoints: 1,opponentPoints: 5}
    ],
  
    get players(){
      return this._players;
    },
    get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName,newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);  
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game ={
      opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
  };
  team.addPlayer('Samer', 'AKkad' , 50);
  team.addGame('Blue', 1,1)
  console.log(team.players);
  console.log(team.games);