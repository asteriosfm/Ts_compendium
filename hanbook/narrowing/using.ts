//-----------------The in operator narrowing-----------------
interface Movable {
  move: () => void
}
interface Flyable {
  fly: () => void
}

function check<Entity extends Movable | Flyable>(enitity: Entity) {
  if ("move" in enitity) {
    enitity.move()
  } else {
    enitity.fly()
  }
}


//-----------------instanceof narrowing-----------------
function check2(date: string | Date) {
  if (date instanceof Date) {
    return date.toString()
  } else {
    return new Date(date)
  }
}



//-----------------Using type predicates-----------------
type Upcoming = 'upcoming';
type Archive = 'archive';
type Live = 'live';

function isUpcoming(status: Upcoming | Archive | Live): status is Upcoming {
  return status === 'upcoming';
}