/**
 * derived from code at https://github.com/mikvor/hashmapTest
 */
var IntMap = class IntMap {
  IntMap.serialVersionUID = 1L;

  IntMap.FREE_KEY = 0;

  IntMap.prototype.NO_VALUE = 0;

  /** Keys and values */
  IntMap.prototype.m_data;

  /** Do we have 'free' key in the map? */
  IntMap.prototype.m_hasFreeKey;
  /** Value of 'free' key */
  IntMap.prototype.m_freeValue;

  /** Fill factor, must be between (0 and 1) */
  IntMap.prototype.float m_fillFactor;
  /** We will resize a map once it reaches this size */
  IntMap.prototype.m_threshold;
  /** Current map size */
  IntMap.prototype.m_size;

  /** Mask to calculate the original position */
  IntMap.prototype.m_mask;
  IntMap.prototype.m_mask2;

  function IntMap() {
    this(1 << 2);
  }

  function IntMap(final int size) {
    this(size, 0.75f);
  }

  funtion IntMap(size, fillFactor) {
   
  }

  function get(key) {
    //return int
  }

  // for use as IntSet - Paul Tarau

  function contains(key) {
    //returns bool
    //return NO_VALUE != get(key);
  }

  function add(key) {
    //returns bool
    //return NO_VALUE != put(key, 666);
  }

  function delete(key) {
    //returns bool
    //return NO_VALUE != remove(key);
  }

  function isEmpty() {
    //returns bool
    //return 0 == m_size;
  }

  function intersect0(final IntMap m, final IntMap[] maps, final IntMap[] vmaps, final IntStack r) {
    //void function
   
  }

  function intersect(maps, vmaps) {
    //returns IntStack
    
  }



  function put(key, value) {
    //returns int
    
  }
  
  function remove(key) {
    //returns int
    
  }

  function shiftKeys(pos) {
    //returns int
    // Shift entries with the same hash.
  }

  function size() {
    //returns int
    //return m_size;
  }

  function rehash(newCapacity) {
    //void function
      }

  /** Taken from FastUtil implementation */

  /** Return the least power of two greater than or equal to the specified value.
   *
   * <p>Note that this function will return 1 when the argument is 0.
   *
   * @param x a long integer smaller than or equal to 2<sup>62</sup>.
   * @return the least power of two greater than or equal to the specified value.
   */
  function nextPowerOfTwo(long x) {
    //returns long
   
  }

  /** Returns the least power of two smaller than or equal to 2<sup>30</sup>
   * and larger than or equal to <code>Math.ceil( expected / f )</code>.
   *
   * @param expected the expected number of elements in a hash table.
   * @param f the load factor.
   * @return the minimum possible size for a backing array.
   * @throws IllegalArgumentException if the necessary size is larger than 2<sup>30</sup>.
   */
  function arraySize(expected, f) {
    //returns int
   
  }

  //taken from FastUtil
  IntMap.INT_PHI = 0x9E3779B9;

  function phiMix(x) {
    //returns int
    //final int h = x * INT_PHI;
    //return h ^ h >> 16;
  }


  function toString() {
   //returns m_data as string
  }

}
