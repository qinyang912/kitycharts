(function(){

var BarChart = kc.BarChart = kity.createClass( 'BarChart', {
    base: kc.BaseChart,

    constructor: function ( target, param ) {
        this.callBase( target, param );
        var plots = this.addElement( 'plots', new kc.BarPlots() );
        this.setPlots( plots );
    }

} );


})();