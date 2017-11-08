({
    doInit : function(cmp, event, helper){
       var readyEvent = cmp.getEvent("readyCheck");
        readyEvent.fire();
        cmp.set('v.active', true);
    },
    
    allReady : function(cmp, event, helper){
    	window.setTimeout(
            $A.getCallback(function () {
                cmp.set('v.active', false);
            }), 2500
        );  
    },
    
	activate : function(cmp, event, helper) {
        cmp.set('v.activating', true);
        cmp.set('v.activationMessage', 'Activating...');
        window.setTimeout(
            $A.getCallback(function () {
                cmp.set('v.activationMessage', 'Activated!');
                cmp.set('v.state', 'Active');
                cmp.set('v.activating', false);
                var activateEvent = $A.get("e.gsawers:ActivateComponentEvent");
                activateEvent.setParams({"componentType" : "ExampleComponent", "activating" : "true"}).fire();
                cmp.set('v.active', true);
            }), 2500
        );
	},
    
    handleActivateEvent : function(cmp, event, helper){
        if(cmp.get('v.active')){
            cmp.set('v.active', false);
            cmp.set('v.activating', true);
        	cmp.set('v.activationMessage', 'Deactivating...');
            window.setTimeout(
                $A.getCallback(function () {
                    cmp.set('v.state', 'Inactive');
                    cmp.set('v.activationMessage', 'Deactivated!');
                    cmp.set('v.activating', false);
                }), 2500
        	);
        }
    }
})