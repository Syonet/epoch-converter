(function( $ ) {
	$( document ).ready(function() {
		var $btnConvert = $("#go");
		
		$btnConvert.bind("click", function() {
			fnConvert.init();
		});
		
		$("#data")
			.focus()
			.keyup( function( event ) {
			    if( event.keyCode === 13 ) {
			 	    $btnConvert.click();
			    }
			});
	});
	
	var fnConvert = {				
		init : function () {
			var arrData;
			var fail = true;
			var $result = $("#result");
			var data = $("#data").val();
			var spacer = $("#spacer").val();
				
			arrData = data.split( spacer === "\\n" ? "\n":spacer );
			$result.empty();

			$.each ( arrData, function() {
				var val;					
				if ( this.length === 0 ) {
					return null;
				}

				if( this.contains( "/" ) ) {
					val = fnConvert.toLong( this.trim() );
				} else {
					val = fnConvert.toDate( this.trim() );
				}

				if ( val === 0 || val.toString().contains( "NaN" ) ) { 
					fail = true;
					$result.append( fnConvert.getMsgErro( this ) );
				} else {
					fail = false;
					$result.append( val + "<br />" );
				}
			});

			if ( fail ) {
				fnConvert.setContainerResultFail( $result.parent() );
			} else {
				fnConvert.setContainerResultSuccess( $result.parent() );
			}

			if ( !data ) {
				fnConvert.setContainerResultFail( $result.parent() );
			}	

		},

		toLong : function( value ) {
			var date = new Date( getDateFromFormat( value,
			fnConvert.getMask() ) );
			return date.getTime();
		},

		toDate : function( value ) {
			var date = new Date( );
			date.setTime( value );
			return formatDate( date, fnConvert.getMask() );
		},

		getMask: function() {
			var mask = $("#mask").val(); 
			return mask ? mask:"dd/MM/yyyy HH:mm:ss";
		},
	
		getMsgErro: function( val ) {
			return "<b>Erro: </b>Verifique se este é um valor"
				 + " válido e se está de acordo com a máscara. <s>"
				 + val + "</s><br>";	
		},

		setContainerResultFail: function( $result ) {
			$result
				.removeClass( "alert-info" )
				.removeClass( "alert-success" )
				.addClass( "alert-error" );
		},

		setContainerResultSuccess: function( $result ) {
			$result
				.removeClass( "alert-info" )
				.removeClass( "alert-error" )
				.addClass( "alert-success" );
		}
	}

	if (!String.prototype.contains) {
		 String.prototype.contains = function (arg) {
				return !!~this.indexOf(arg);
		};
	}
 window.fnConvert = fnConvert;
})( jQuery );
