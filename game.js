
var com = Math.floor(Math.random() * 10) + 1;
var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );

	if( p == com){
		alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
					
		}else if(p <= com){
			alert('terlalu kecil');
			var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
				
				if( p == com){
					alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');

					}else if(p <= com){
						alert('terlalu kecil');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
							
							if( p == com){
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');
							
							}else{
								alert('terlalu kecil \nwaktu habis!!');
							}
					
					}else{
						alert('terlalu besar');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );
						
							if( p == com){
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');

							}else{
								alert('terlalu besar \nwaktu habis!!');
							}
					}


		}else if(p >= com){
			alert('terlalu besar');
			var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );

				if( p == com){
					alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');

					}else if(p >= com){
						alert('terlalu besar');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );

							if( p == com){
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');

							}else{
								alert('terlalu besar \nwaktu habis!!');
							}

					}else{
						alert('terlalu besar');
						var p = prompt('masukan angka 1- 10\nanda memiliki 3 kesempatan' );

							if( p == com){
								alert('Selamat !!!..\njawaban anda benar !!!\nanda pilih '+p+' dan komputer pilih '+com+'\nSuksess.!!.');

							}else{
								alert('terlalu besar \nwaktu habis!!');
							}
					}		
		}else{
			alert('yang anda masukan bukan angka');
		}	
alert('terimakasih.');	
