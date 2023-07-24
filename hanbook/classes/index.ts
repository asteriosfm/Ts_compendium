// Classes may also implement multiple interfaces, e.g.class C implements A, B {.


//classes implementation for arguments "new () => A"

// Index Signatures

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}



//Class Heritage
interface Pingable {
  ping?(): void;
  pong?(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}

// PROTECTED
// protected members are only visible to subclasses of the class they’re declared in.

