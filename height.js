process.stdout.write( "\n This program can convert your height. Please,"
					+ "\n type in your height in centimeters: " );
				
process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the numbers
					
	var height_in_centimeters = Number 	( input_from_user ) ;
	var height_in_inches      = 2.54                        ;  
	var height_in_feet1       = 30.48                       ;
	var height_in_feet2       = 12
	var feet                  = height_in_centimeters/height_in_feet1    ;
	var inches                = height_in_centimeters/height_in_inches  ;
	var some_feet             = feet             ;
	var rounded_feet          = Math.floor( some_feet )     ;
	var some_inches           = inches           ;
	var rounded_inches1       = Math.floor( some_inches )   ;
	var rounded_inches2       = Math.floor( rounded_inches1-rounded_feet*12 );

 
process.stdout.write( "\n Your height in inches is " + inches + "."
                     + "\n This is " + rounded_feet + " feet " + " and " + rounded_inches2 + " inches .\n\n");
	
     if   (height_in_centimeters < 60)
{
	process.stdout.write( "\n Only " + height_in_centimeters + " centimeters " 
	                     +"\n Are you so short ? \n\n" );
}	
  else if ( 160< height_in_centimeters && height_in_centimeters <190)
  {
	  process.stdout.write( "\n That is a quite average height.\n " ) ;
  }
  else if ( height_in_centimeters > 400 )
  {
	  process.stdout.write( "\n You might be a giraffe.\n " ) ;   
  }
  process.exit() ;
} );					  
