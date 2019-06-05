$('#guardar').click(function(){


	var vcod = document.getElementById('codigo').value;
	var vnombre = document.getElementById('nombre').value;
	var vcuanto = document.getElementById('cuanto').value;
	var vhaciendo = document.getElementById('haciendo').value;
	//datos a firebase de google
	firebase.database().ref("alumnos").push({
		codigo: vcod,
		nombre: vnombre,
		cuanto: vcuanto,
		haciendo: vhaciendo 
			})

M.toast({html: 'Datos Guardados'})
});