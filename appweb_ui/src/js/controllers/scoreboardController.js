import { scoreboardView } from '../views/scoreboardView.js';
import { User } from '../models/userModel.js';

const mockUsers = [new User({id:11,role:'student',name:'Ana',xp:120}),new User({id:12,role:'student',name:'Luis',xp:95})];

export const scoreboardController = {
  init() {
    // puede llamarse desde un botón o carga inicial
    this.render();
  },
  render() {
    const top10 = mockUsers.sort((a,b)=>b.xp-a.xp).slice(0,10);
    scoreboardView.render(top10);
  }
};