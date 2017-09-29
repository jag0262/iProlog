
/**
 * runtime representation of an immutable list of goals
 * together with top of heap and trail pointers
 * and current clause tried out by head goal
 * as well as registers associated to it
 *
 * note that parts of this immutable lists
 * are shared among alternative branches
 */
var Spine = class Spine {

  /**
   * creates a spine - as a snapshot of some runtime elements
   */
   //inputs: int[], int, IntList, int, int, int[]
  function Spine(gs0, base, gs, ttop, k, cs) {
    hd = gs0[0];
    this.base = base;
    this.gs = IntList.tail(IntList.app(gs0, gs)); // prepends the goals of clause with head hs
    this.ttop = ttop;
    this.k = k;
    this.cs = cs;
  }

  /**
   * creates a specialized spine returning an answer (with no goals left to solve)
   */
   //inputs: int, int
  function Spine( hd, ttop) {
    this.hd = hd;
    base = 0;
    gs = IntList.empty;
    this.ttop = ttop;

    k = -1;
    cs = null;
  }

  Spine.prototype.hd; // head of the clause to which this corresponds
  Spine.prototype.base; // top of the heap when this was created

  Spine.prototype.gs; // goals - with the top one ready to unfold
  Spine.prototype.ttop; // top of the trail when this was created

  Spine.prototype.k;

  Spine.prototype.xs; // index elements
  Spine.prototype.cs; // array of  clauses known to be unifiable with top goal in gs
}
