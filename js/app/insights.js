
	function cashfunction(){
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Inflow',{role: 'style'}, 'outflow',{role: 'style'} ,'Net cash flow'],
         ['Oct 2017',  345,'fill-color:#f359c2;stroke-color:#f359c2;', 265,'fill-color:#7c36ec;stroke-color:#7c36ec;', 305],
         ['Nov',  232,'fill-color:#f359c2;stroke-color:#f359c2;', 334,'fill-color:#7c36ec;stroke-color:#7c36ec;', 283],
         ['Dec',  178,'fill-color:#f359c2;stroke-color:#f359c2;', 543,'fill-color:#7c36ec;stroke-color:#7c36ec;', 360.5],
         ['Jan 2018',  368,'fill-color:#f359c2;stroke-color:#f359c2;', 723,'fill-color:#7c36ec;stroke-color:#7c36ec;', 545.5],
         ['Feb',  423,'fill-color:#f359c2;stroke-color:#f359c2;', 676,'fill-color:#7c36ec;stroke-color:#7c36ec;', 549.5],
         ['Mar',  450,'fill-color:#f359c2;stroke-color:#f359c2;', 600,'fill-color:#7c36ec;stroke-color:#7c36ec;', 525]
      ]);

    var options = {
      title : '',
      legend:'none',
      vAxis: {title: 'Amount in BHD',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      
      hAxis: {title: 'Month',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      seriesType: 'bars',
      series: {2: {type: 'line',color: 'black'}},
      titleTextStyle: {
        fontName: 'Roboto', 
        fontSize: 30, 
        bold: true,    
        italic: false   
    },
    curveType: 'function',
          pointSize: 7,
          dataOpacity: 0.4,
		  chartArea:{left:100,top:40,bottom:80,width:"200%",height:"200%"},
		  width:800,
		  height:400
    };

    var chart = new google.visualization.ComboChart(document.getElementById('cashinflow'));
    chart.draw(data, options);
  }
	}
	function expensefunction(){
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Inflow',{role: 'style'},'Avg for last 3 months : BHD 600.000'],
         ['Oct 2017',  265.000,'fill-color:#f359c2;stroke-color:#f359c2;',250.000],
         ['Nov',  334.000,'fill-color:#f359c2;stroke-color:#f359c2;',250.000],
         ['Dec',  543.000,'fill-color:#f359c2;stroke-color:#f359c2;',500.000],
         ['Jan 2018',  723.000,'fill-color:#f359c2;stroke-color:#f359c2;',600.000],
         ['Feb',  676.000,'fill-color:#f359c2;stroke-color:#f359c2;',600.000],
         ['Mar',  600.000,'fill-color:#f359c2;stroke-color:#f359c2;',600.000]
      ]);

    var options = {
      title : '',
      legend:'none',
      vAxis: {title: 'Amount in BHD',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      
      hAxis: {title: 'Month',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      seriesType: 'bars',
      series: {1: {type: 'line',color: 'black'}},
      titleTextStyle: {
        fontName: 'Roboto', 
        fontSize: 30, 
        bold: true,    
        italic: false   
    },
    curveType: 'function',
          pointSize: 7,
          dataOpacity: 0.4,
		  chartArea:{left:100,top:40,bottom:80,width:"200%",height:"200%"},
		  width:800,
		  height:400,
		   bar: {groupWidth: "40%"},
    };

    var chart = new google.visualization.ComboChart(document.getElementById('expense'));
    chart.draw(data, options);
  }
	}
	
	
	google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Assets',{role: 'style'},'Net Worth'],
         ['Oct 2017',  106.4,'fill-color:#7c36ec;stroke-color:#7c36ec;',106],
         ['Nov',  71.5,'fill-color:#7c36ec;stroke-color:#7c36ec;',71],
         ['Dec',  49.9,'fill-color:#7c36ec;stroke-color:#7c36ec;',49],
         ['Jan 2018',  144.0,'fill-color:#7c36ec;stroke-color:#7c36ec;',144],
         ['Feb',  122.2,'fill-color:#7c36ec;stroke-color:#7c36ec;',122],
         ['Mar',  176.0,'fill-color:#7c36ec;stroke-color:#7c36ec;',176]
      ]);

    var options = {
      title : '',
      legend:'none',
      vAxis: {title: 'Amount in BHD',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      
      hAxis: {title: 'Month',titleTextStyle: {fontName: 'Roboto', 
        fontSize: 18, 
        bold: false, italic: false}},
      seriesType: 'bars',
      series: {1: {type: 'line',color: 'black'}},
      titleTextStyle: {
        fontName: 'Roboto', 
        fontSize: 30, 
        bold: true,    
        italic: false   
    },
	
    curveType: 'function',
          pointSize: 7,
          dataOpacity: 0.4,
		  chartArea:{left:100,top:40,bottom:80,width:"200%",height:"200%"},
		  width:800,
		  height:400,
		   bar: {groupWidth: "40%"},
		   
    };

    var chart = new google.visualization.ComboChart(document.getElementById('networth'));
    chart.draw(data, options);
	google.visualization.events.addListener(chart,'select',selectHandler8);
	
  }
	
	
