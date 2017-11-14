package iProlog;

import static org.junit.Assert.*;

import org.junit.Test;

public class IntListTest {


	@Test
	public void testisEmpty() {
		
		System.out.println("Testing isEmpty function. Should show only 1 failure for assertfalse.");
		assertTrue(IntList.isEmpty(null));
		assertFalse(IntList.isEmpty(null));
	}

  
}
