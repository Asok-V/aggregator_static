//global vars
      google.charts.load('current', {'packages':['corechart','bar']});
         
      var chart_Col,chartIn_lines,optionsIn_lines;
     
      google.charts.setOnLoadCallback(drawCCPie);
      google.charts.setOnLoadCallback(drawIOLine);
      google.charts.setOnLoadCallback(drawchartCol);
    


      
     



//functions to draw charts




      function drawCCPie() {

    var dataCCPie = google.visualization.arrayToDataTable([
          ['Category', 'Spending (in rupees)',],
          ['Movies', 2500], 
          ['Groceries', 18000], ['Dining', 3500], ['Misc', 7000], ['Travel', 5000]
        ]);

        var options_pie = {
          legend: 'labeled',
          pieSliceText:'none',
          pieHole: 0.5,
        animation:{
                startup: true,
                duration: 500,
                easing: 'linear',
              },  
             width:600,
            height:250, 
			 slices: { 0: {color:'#80deea'},
                    1: {color:'#e53935'},
                    2: {color:'#694969'},
                    3: {color:'#757575'},
                    4: {color:'#ce7443'},                    
                    5: {color:'#fd8b25'}          },
                       
         
        };

        var CCPie = new google.visualization.PieChart(document.getElementById('cc_pie'));
        CCPie.draw(dataCCPie, options_pie);
}



       function drawIOLine() {

       var dataI = new google.visualization.DataTable();
      
        dataI.addColumn('date', 'x');
        dataI.addColumn('number', 'Net Worth Trends');
		dataI.addColumn({id:'j0', type:'number', role:'interval'});
        dataI.addColumn({id:'j1', type:'number', role:'interval'});
         
        
      


        

       dataI.addRows([
            [new Date(2018, 0, 1),9000,0,9000],
            [new Date(2018, 1, 1),6000,0,6000],
            [new Date(2018, 2, 1),20000,0,20000],
            [new Date(2018, 3, 1),25000,0,25000],
            [new Date(2018, 4, 1),19000,0,19000],
            [new Date(2018, 5, 1),28000,0,28000]]);


      
       optionsIn_lines = {
            curveType: 'function',
            lineWidth: 2,
            intervals: { 'style':'boxes' },
            gridlines: { ticks: [ 1, 10, 15, 20, 25,30 ]},
            fontName:'Roboto',
            fontSize:12,
         legend: {

      maxLines: 1,
      textStyle: {
        fontSize: 12
      }
    },
	series: {
            0: { color: '#512da8' },
            
            
          },
	
	
            width:600,
            height:250, 		
            animation:{
                    startup: true,
                    duration: 500,
                    easing: 'linear',
                  },    
            backgroundColor:'#fff',
            hAxis: {
              title: ''
            },
			legend:'none',
			
            vAxis: {
              title: '',
              format:'short'            
            }}

     



  
        chartIn_lines = new google.visualization.LineChart(document.getElementById('chartIn_lines'));
        chartIn_lines.draw(dataI, optionsIn_lines);
      }



      function drawchartCol() {
        var data_c = google.visualization.arrayToDataTable([
          ['', 'Utilised',{ role: 'style' }],
          ['Fuel', 150,'fill-color:#f48fb1 ;fill-opacity: 0.6;stroke-color:#880e4f  ;stroke-opacity: 0.6;'],
          ['Sports', 180,'fill-color:#ce93d8 ;fill-opacity: 0.6;stroke-color:#4a148c  ;stroke-opacity: 0.6;'],
          ['Education', 160,'fill-color:#90caf9 ;fill-opacity: 0.6;stroke-color:#0d47a1 ;stroke-opacity: 0.6;'],
          ['Groceries', 280,'fill-color:#e6ee9c ;fill-opacity: 0.6;stroke-color:#827717 ;stroke-opacity: 0.6;'],
          ['Misc', 40,'fill-color:#ffcc80 ;fill-opacity: 0.6;stroke-color:#e65100 ;stroke-opacity: 0.6; ']
           ]);


 
      options_col = {



       

        bar: {groupWidth: "50%"},
        hAxis: {
          title: ''
        },
        vAxis: {
          title: '',
          format:'#',
          format: 'short'            
        },
		legend:'none',
        width:601,
        height:300,
     
             // chartArea : {width:'80%'},        
            
      
      };
      

         chart_Col = new google.visualization.ColumnChart(document.getElementById('chart_Col'));

        chart_Col.draw(data_c,options_col);
      }



