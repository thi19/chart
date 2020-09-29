({
	doInit : function(component, event, helper) {
        var params ={};
		helper.callToServer(
        	component,
            "c.findDataSetForChart",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.ltngChartData",response);
                
                //display line chart
                helper.generateChartData(component,"line","lineChartSection", ":Opportunities grouped by Forecast");
                //display horrizontal bar chart
                helper.generateChartData(component,"bar","horrizontalBarChartSection", ":Opportunities grouped by Forecast");
                //display Pie chart
                helper.generateChartData(component,"pie","pieChartSection", ":Opportunities grouped by Forecast");
            }, 
            params
        );
        
        helper.callToServer(
        	component,
            "c.findDataUsersActives",
            function(response)
            {	
                console.log('apex response :'+JSON.stringify(response));
                component.set("v.ltngChartData",response);
                
                //display horrizontal doughnut chart
                helper.generateChartData(component,"doughnut","doughnutChartSection", ":Users active by PortalIsEnabled");

            }, 
            params
		);
    }
})