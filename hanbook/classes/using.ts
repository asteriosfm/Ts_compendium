// Classes may also implement multiple interfaces.
interface Movable {
  moves: boolean
}

interface Dragable {
  drags: boolean
}

interface Runable {
  runs: boolean
}


class Everything implements Runable, Dragable, Movable{
  runs = true;
  moves = true;
  drags = true;
}



// Index Signatures
class Checker {
  [idnex: string]: boolean | ((s: string) => boolean);

  constructor() {
    this.moves = true;
  }

  checkString(s: string) {
    return !!s
  }
}




//Class Heritage
interface WithActions {
  move?(): boolean,
  act?(): boolean,
}

class WithMoves implements WithActions {
  [method: string]: (...args: any) => unknown
  move() {
    return true
  }
}

class WithActing implements WithActing {
  act() {
    return false;
  }
}