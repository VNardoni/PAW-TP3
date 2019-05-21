function reiniciarJuego(grilla) {
	tateti.reiniciar();
	
    sumarPuntaje(0, 0);
	if(grilla) {
		tateti.paint(grilla);
	}
}
function juegoTateti(placeholder, grilla, callback) {

	
	this.placeholder = placeholder;

	
	this.paint(grilla);

	
	this.callback = callback;

	
	this.resultados = {
		X: 0,
		O: 0
	};

	this.marcas = {
		X: "X",   
		O: "O",  
		c: 0 
	};

	return this;
}

juegoTateti.prototype.paint = function(grilla) {

	var self = this;

	
	self.grilla = grilla;

	var html = '<table id="ta-te-ti" align="center">';
	
	for(var i = 0; i < grilla; i++) {
		html += '<tr>';
		for(var j = 0; j < grilla; j++) {
			html+= '<td></td>';
		}
		html += '</tr>';
	}

	html += '</table>';
	
	self.placeholder.innerHTML = html;

	
	self.columns = self.placeholder.getElementsByTagName("td");

	for(i = 0; i < this.columns.length; i++) {
		self.columns[i].addEventListener("click", marcador);
	}

	function marcador(e) {
		self.marca(e.target);
	}

};

juegoTateti.prototype.marca = function(column) {
	if(column.innerHTML) {
		return;
	}
	this.marcas.c++;

	
	var seleccionada = this.marcas.c % 2 === 1 ? this.marcas.X : this.marcas.O;

	
	column.innerHTML = seleccionada;
	column.classList.add(seleccionada);

	
	if(this.haGanado(seleccionada)) {
		
		if(this.marcas.c % 2 === 1) {
			this.resultados.X++;
		} else {
			this.resultados.O++;
		}
		
		this.callback(seleccionada, this.resultados);
	} else if(this.marcas.c === this.columns.length) {
		
		this.callback("empate");
	}

};


juegoTateti.prototype.haGanado = function(marca) {

	
	var grilla = this.grilla;
	var horizontal_c,
		vertical_c,
		right_to_left_c = 0,
		left_to_right_c = 0;

	for(var i = 0; i < grilla; i++) {
		horizontal_c = vertical_c = 0;
		for(var j = 0; j < grilla; j++) {
			if(this.columns[i * grilla + j].innerHTML == marca) {
				horizontal_c++;
			}
			if(this.columns[j * grilla + i].innerHTML == marca) {
				vertical_c++;
			}

		}
		if(horizontal_c == grilla || vertical_c == grilla) {
			return true;	
		}
		if(this.columns[i * grilla + i].innerHTML == marca) {
			right_to_left_c++;
		}
		if(this.columns[(grilla - 1) * (i+1)].innerHTML == marca) {
			left_to_right_c++;
		}

	} 
	if(right_to_left_c == grilla || left_to_right_c == grilla) {
		return true;	
	}

	return false;
};

juegoTateti.prototype.limpiar = function() {
	// se limpia toda la grilla para un nuevo partido
	for(var i = 0; i < this.columns.length; i++) {
		this.columns[i].innerHTML = '';
		this.columns[i].classList.remove(this.marcas.X);
		this.columns[i].classList.remove(this.marcas.O);

	}
	this.marcas.c = 0;
};

juegoTateti.prototype.reiniciar = function() {
	this.limpiar();
	this.resultados = {
		X: 0,
		O: 0
	};
};

var placeholder = document.getElementById("placeholder");

var tateti = new juegoTateti(placeholder, 3, pasaResultado);

function pasaResultado(resultado, resultados) {
	if(resultado == 'empate') {
		alert("Empate");
	} else {
		alert("El ganador es :  "+resultado);
		sumarPuntaje(resultados.X, resultados.O);
	}
	tateti.limpiar();
}

function sumarPuntaje(X, O) {
	document.querySelector("#marcador #jugador1").innerHTML = X;
	document.querySelector("#marcador #jugador2").innerHTML = O;	
}

