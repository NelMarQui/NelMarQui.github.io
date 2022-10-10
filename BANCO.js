saldoPrincipal = 2500.00;

function login() {
    usuario = prompt("Digite nombre de usuario: ");
    conteo = 3;
    do {
        pin = prompt("Bienvenido " + usuario + " Ingresa tu PIN:");
        if (pin == "0000") {
            window.location = "Index.html";
            return
        } else {
            conteo = conteo - 1;
            alert("Te quedan " + conteo + " intentos.");
        }
    } while (conteo > 0);

    if (conteo == 0) {
        alert("Usuario bloqueado")
    }
}

function ConsultaSaldo() {
    alert("Su saldo actual es de: $" + saldoPrincipal);
}

function RetirarMonto() {
    retiro = parseInt(prompt("Digite la cantidad a retirar:"));
    if (retiro > saldoPrincipal) {
        alert("¡Su saldo es insuficiente para realizar esta transaccion!");
    } else {

        saldoPrincipal = saldoPrincipal - retiro;

        billete20 = parseInt(retiro / 20);
        retiro = retiro - (billete20 * 20);

        billete10 = parseInt(retiro / 10);
        retiro = retiro - (billete10 * 10);

        billete5 = parseInt(retiro / 5);
        retiro = retiro - (billete5 * 5);

        billete1 = parseInt(retiro / 1);
        retiro = retiro - (billete5 * 1);


        entrega = "";

        if (billete20 > 0) {
            entrega = entrega + "Billetes de $20 -> " + billete20 + "\n";
        }
        if (billete10 > 0) {
            entrega = entrega + "Billetes de $10 -> " + billete10 + "\n";
        }
        if (billete5 > 0) {
            entrega = entrega + "Billetes de $5 -> " + billete5 + "\n";
        }
        if (billete1 > 0) {
            entrega = entrega + "Billetes de $1 -> " + billete1 + "\n";
        }

        alert(entrega + "\nSu saldo principal es: $" + saldoPrincipal);
    }
}

function AbonarCuenta() {
    abono = parseInt(prompt("Digite la cantidad a abonar:"));
    if (abono > 0) {
        saldoPrincipal = saldoPrincipal + abono;
        alert("Su nuevo saldo es: $" + saldoPrincipal);
    } else {
        alert("¡Debe ingresar correctamente los datos!");
    }
}

function Salir(){
    window.location = "Banco ¡Supérate!.html"
}