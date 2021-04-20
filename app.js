'use strict'
var app = angular.module('calculadora',[]);

app.controller("CalculadoraTest",function($scope) {
   $scope.arrayNumeros = [];
   $scope.valores = ['+','-','*','/'];
   $scope.primerValor = "";
   $scope.segundoValor = "";
   $scope.operadorActual = "";
   var operadorBandera = false;

//Imprime los valores del 0 al 9 
   for(var i=9; i >= 0; i--) {
       $scope.arrayNumeros.push(i);
   }

   function operadorMostradoActual(num) {
        asignarOperador(num);
   }

   function asignarOperador(num) {
        if(operadorBandera) {
            $scope.segundoValor += num;
        } else {
            $scope.primerValor += num;
        }
   }

   $scope.MostrarNumero = operadorMostradoActual;

   function activarBandera() {
    operadorBandera = true;
   }
   
   function setOperadorActual(operador) {
        activarBandera();
        $scope.operadorActual = operador;
   }

   $scope.Operador = setOperadorActual;

   function calculo() {
       if($scope.primerValor != '' && $scope.segundoValor != '') {
            var formato = $scope.primerValor + $scope.operadorActual + $scope.segundoValor;
            $scope.resultadoOperacion = eval(formato);
       }
   }
   
   $scope.resultado = calculo;

   function limpiarScope() {
    operadorBandera = false;
       $scope.primerValor = '';
       $scope.segundoValor = '';
       $scope.operadorActual = '';
       $scope.resultadoOperacion = '';
   }

   $scope.limpiarNumeros = limpiarScope;
});