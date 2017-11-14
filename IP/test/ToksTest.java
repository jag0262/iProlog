package iProlog;

import static org.junit.Assert.*;

import org.junit.Test;

public class ToksTest {

	@Test
	public void testToSentences() {
		System.out.println("Testing for toString Output");
		assertNotNull(Toks.toSentences("hello", false));
	}

}
