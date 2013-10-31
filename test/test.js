test( " Convert to Long ", function() {
	var longVal = fnConvert.toLong( "22/11/1990 15:30:00" );
	strictEqual( longVal, 659295000000, "get value long 659295000000" );
});

test( " Convert long type for Date using default mask  ", function() {
	var longVal = fnConvert.toDate( "659295000000" );
	strictEqual( longVal, "22/11/1990 15:30:00", " Long is 659295000000" );
});
